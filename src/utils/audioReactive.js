import { onBeforeUnmount, onMounted, ref } from 'vue'

const _ctxState = {
  ctx: null,
  analyser: null,
  rafId: 0,
  dataArray: null,
  source: null,
  sourceEl: null
}

const _sourceCache = new WeakMap()

function _pickMediaElement() {
  const nodes = Array.from(document.querySelectorAll('audio,video'))
  if (nodes.length === 0) return null
  return nodes.find((n) => !n.paused && !n.ended) ?? nodes[0]
}

function _ensureGraph(el) {
  if (!_ctxState.ctx) {
    _ctxState.ctx = new (window.AudioContext || window.webkitAudioContext)()
    _ctxState.analyser = _ctxState.ctx.createAnalyser()
    _ctxState.analyser.fftSize = 1024
    _ctxState.dataArray = new Uint8Array(_ctxState.analyser.fftSize)
  }

  if (_ctxState.sourceEl === el && _ctxState.source) return

  if (_ctxState.source) {
    try {
      _ctxState.source.disconnect()
    } catch {
      // ignore
    }
  }

  const cached = _sourceCache.get(el)
  const source = cached ?? _ctxState.ctx.createMediaElementSource(el)
  if (!cached) _sourceCache.set(el, source)

  source.connect(_ctxState.analyser)
  _ctxState.analyser.connect(_ctxState.ctx.destination)

  _ctxState.source = source
  _ctxState.sourceEl = el
}

function _computeLevel(timeDomainData) {
  let sum = 0
  for (let i = 0; i < timeDomainData.length; i++) {
    const v = (timeDomainData[i] - 128) / 128
    sum += v * v
  }
  return Math.sqrt(sum / timeDomainData.length)
}

export function useAudioReactiveScale(options = {}) {
  const {
    minScale = 1,
    maxScale = 1.08,
    smoothing = 0.12,
    boost = 1.6,
    idleReturn = 0.02
  } = options

  const scale = ref(1)
  let _running = false
  let _resumeHandler = null

  const tick = () => {
    if (!_running || !_ctxState.analyser || !_ctxState.dataArray) return

    const el = _pickMediaElement()
    if (el) {
      try {
        _ensureGraph(el)
        _ctxState.analyser.getByteTimeDomainData(_ctxState.dataArray)
        const level = _computeLevel(_ctxState.dataArray)
        const target = Math.min(maxScale, Math.max(minScale, minScale + level * boost))
        scale.value = scale.value + (target - scale.value) * smoothing
      } catch {
        scale.value = scale.value + (minScale - scale.value) * idleReturn
      }
    } else {
      scale.value = scale.value + (minScale - scale.value) * idleReturn
    }

    _ctxState.rafId = requestAnimationFrame(tick)
  }

  const start = async () => {
    if (_running) return
    _running = true

    if (_ctxState.ctx && _ctxState.ctx.state === 'suspended') {
      try {
        await _ctxState.ctx.resume()
      } catch {
        // ignore
      }
    }

    _ctxState.rafId = requestAnimationFrame(tick)
  }

  const stop = () => {
    _running = false
    if (_ctxState.rafId) cancelAnimationFrame(_ctxState.rafId)
    _ctxState.rafId = 0
  }

  onMounted(() => {
    _resumeHandler = () => {
      start()
      window.removeEventListener('pointerdown', _resumeHandler)
      window.removeEventListener('keydown', _resumeHandler)
    }
    window.addEventListener('pointerdown', _resumeHandler, { once: true })
    window.addEventListener('keydown', _resumeHandler, { once: true })
  })

  onBeforeUnmount(() => {
    if (_resumeHandler) {
      window.removeEventListener('pointerdown', _resumeHandler)
      window.removeEventListener('keydown', _resumeHandler)
    }
    stop()
  })

  return { scale, start, stop }
}
