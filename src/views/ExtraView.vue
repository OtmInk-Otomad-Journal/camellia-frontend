<script setup>
import { data, fun } from '../data/MainView_data.js'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import BackgroundImage from '../components/BackgroundImage.vue'
import BoardHeaderDecor from '../components/BoardHeaderDecor.vue'
import BoardLogoWatermark from '../components/BoardLogoWatermark.vue'
import ExtraSingle from '../components/ExtraSingle.vue'
import ExtraList from '../components/ExtraList.vue'

gsap.registerPlugin(ScrollToPlugin)

const boardRef = ref()
const test_num = ref(0)
let masterTimeline

// embedded：作为子板嵌入到 /main（主榜/副榜）页面时开启。
// 嵌入时不注册 window 全局函数、不重复处理 data，只通过 expose 提供动画接口给宿主板调用。
const props = defineProps({
  embedded: { type: Boolean, default: false }
})

function buildAnimation({ paused = false } = {}) {
  if (!boardRef.value) return

  masterTimeline?.kill()
  const q = gsap.utils.selector(boardRef.value)
  const resetTargets = q(
    '.board-header-decor, .weekly-label, .category-label, .left-triangles, .left-diagonal, .left-star, .logo-watermark, .video-outer, .video-outer-border, .whole-list, .extra-item, .ca-box, .extra-single, .calendar-ornament'
  )

  gsap.set(resetTargets, { clearProps: 'transform,opacity,clipPath,filter' })
  const listEl = q('.whole-list')[0]
  if (listEl) listEl.scrollTop = 0
  // 在入场位移介入前读取“干净”的可滚动距离（transform 不影响布局高度，
  // 这里量到的就是最终值）。用它作滚动终点，避免 y:'max' 在 extra-item
  // 位移把 scrollHeight 撑高的瞬间缓存到虚高终点。
  const maxScroll = listEl ? listEl.scrollHeight - listEl.clientHeight : 0

  masterTimeline = gsap.timeline({ paused, defaults: { ease: 'expo.out' } })
  masterTimeline
    .from(q('.logo-watermark'), { duration: 1, y: -90, opacity: 0 }, 0.05)
    .from(q('.weekly-label'), { duration: 0.8, y: -24, opacity: 0 }, 0.18)
    .from(q('.category-label'), { duration: 0.65, x: -90, opacity: 0 }, 0.12)
    .from(q('.left-triangles'), { duration: 0.55, x: -60, opacity: 0 }, 0.2)
    .from(
      q('.left-diagonal'),
      { duration: 0.65, scaleX: 0, opacity: 0, transformOrigin: 'left center' },
      0.24
    )
    .from(
      q('.left-star'),
      { duration: 0.45, scale: 0, rotation: -90, opacity: 0, ease: 'back.out(2)' },
      0.36
    )
    .from(q('.video-outer'), { duration: 1, x: 1000 }, 0)
    .from(q('.video-outer-border'), { duration: 1, x: 1000 }, 0.05)
    .from(q('.whole-list'), { duration: 1, x: -212.5, y: 1000 }, 0)
    .to(
      q('.whole-list'),
      {
        // 停顿 2 秒后开始滚动（position: 2），持续到 (side_duration - 5) 秒处
        duration: Math.max(Number(data.value.side_duration || 0) - 5, 0.1),
        scrollTo: { y: maxScroll },
        ease: 'sine.inOut'
      },
      2
    )
    // 入场前先把 extra-item 隐藏（先不显示），等飞入动画开始再逐个出现；
    // 否则面板滑入时 items 已以最终位置停在面板里，入场开始又跳回下方，动画是错的
    .set(q('.extra-item'), { autoAlpha: 0 }, 0)
    // 0.4s 起逐个从下方飞入。immediateRender: false 让位移只从 0.4s 开始生效，
    // 滚动终点已按上面的 maxScroll 预计算，位移撑高 scrollHeight 不再影响它
    .fromTo(
      q('.extra-item'),
      { translateY: 2000, autoAlpha: 0 },
      { duration: 1, translateY: 0, autoAlpha: 1, stagger: 0.08, immediateRender: false },
      0.4
    )

  return masterTimeline
}

function seek_frame(frame, fps) {
  masterTimeline?.seek(frame / fps, false)
}

//// 全局函数 统一写在这（仅独立路由时注册；嵌入 /main 时由主榜接管）
if (!props.embedded) {
  window['seek_frame'] = (frame, fps) => {
    seek_frame(frame, fps)
  }

  window['inject'] = async (obj) => {
    await fun(obj)
    await nextTick()
    buildAnimation({ paused: true })
  }

  window['inject_wvc'] = async (obj) => {
    await fun(obj)
    await nextTick()
    buildAnimation()?.play(0)
  }
}

onMounted(async () => {
  if (props.embedded) return
  await fun(data.value)
  await nextTick()
})

// 测试专用函数
function testAnimation() {
  test_num.value += 1
  buildAnimation()?.play(0)
}

// 或按下T键触发
function onKeydown(event) {
  if (event.key === 't' || event.key === 'T') {
    testAnimation()
  }
}

// 供嵌入 /main 时由主榜调用的动画接口
function play() {
  masterTimeline?.play(0)
}

function reset() {
  masterTimeline?.kill()
  masterTimeline = undefined
}

defineExpose({ buildAnimation, play, reset })

if (!props.embedded) {
  window['test'] = testAnimation
  document.addEventListener('keydown', onKeydown)
}

onBeforeUnmount(() => {
  masterTimeline?.kill()
  if (props.embedded) return
  document.removeEventListener('keydown', onKeydown)
  delete window.test
  delete window.inject
  delete window.inject_wvc
  delete window.seek_frame
})
</script>

<template>
  <button v-if="test_num != 0" class="test-button" aria-label="重播动画" @click="testAnimation">
    重播动画
  </button>
  <div ref="boardRef" class="big-board">
    <BoardLogoWatermark class="calendar-watermark" />
    <BoardHeaderDecor class="ca-header" title="副榜" />
    <div class="whole-list">
      <div class="extra-item" v-for="(item, index) in data.more_data" :key="index">
        <div class="extra-point"></div>
        <ExtraSingle :data="item" />
      </div>
      <ExtraList :show_staff="data.show_staff" />
      <div class="empty-reserve-2" v-if="!data.show_staff"></div>
      <div class="empty-reserve"></div>
    </div>
    <div class="video-outer-border"></div>
    <div class="video-outer">
      <canvas
        :src="data.video_src"
        :class="['video-inner', { preblur: data.prevent == 'true' }]"
        ref="videoRef"
        :key="data.video_src"
        :start-time="Math.floor((data.start_time - data.front_reserved_time) * 1000)"
        muted
        video-capture
      >
      </canvas>
    </div>
    <BackgroundImage :accent="false" />
  </div>
</template>

<style lang="scss" scoped>
.big-board {
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  color: #212121;
  background: #e2e2e2;
}

.ca-header :deep(.left-diagonal) {
  display: none;
}

// 测试按钮
.test-button {
  position: absolute;
  z-index: 1000;
}

.preblur {
  filter: blur(50px) brightness(0.75);
}

.video-inner {
  background: black;
  width: 1920px;
  height: 1080px;
  object-fit: cover;
}

.video-outer-border {
  background-color: v-bind('data.dark_color');
  z-index: 2;
  width: 575px;
  height: 1080px;
  top: 0;
  right: 10px;
  position: absolute;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%);
}

.video-outer {
  width: 575px;
  height: 1080px;
  background-color: #212121;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%);
  display: flex;
  justify-content: center;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

.whole-list {
  position: absolute;
  z-index: 2;
  top: 68px;
  right: 400px;
  box-sizing: border-box;
  width: 1280px;
  height: 1380px;
  padding-left: 11px;
  padding-top: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: linear-gradient(rgba(33, 33, 33, 0.7), rgba(33, 33, 33, 0.7));
  background-position: calc(100% - 10px) 0;
  background-repeat: no-repeat;
  background-size: 1px 100%;
  transform: rotate(12.02227669deg);
  transform-origin: top right;
  mask-image: linear-gradient(167.97772331deg, transparent 250px, black 300px);
}

.extra-point {
  box-sizing: border-box;
  width: 21px;
  height: 21px;
  border: 5px solid white;
  border-radius: 50%;
  background-color: v-bind('data.light_color');
  box-shadow: 0 0 0 1px rgba(33, 33, 33, 0.05);
  position: absolute;
  right: 0;
}

.extra-item {
  position: relative;
  margin-bottom: 60px;
  transform-origin: center right;
  transform: rotate(-12.02227669deg);
  display: flex;
  align-items: center;
}

.empty-reserve {
  width: 100%;
  height: 80px;
}

.empty-reserve-2 {
  width: 100%;
  height: 320px;
}
</style>
