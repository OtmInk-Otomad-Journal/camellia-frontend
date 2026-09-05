<script setup>
import MainInfo from '../components/MainInfo.vue'
import MainCounts from '../components/MainCounts.vue'
import MainRank from '../components/MainRank.vue'
import BackgroundImage from '../components/BackgroundImage.vue'
// import BackgroundIcons from '../components/BackgroundIcons.vue'
import { data, fun } from '../data/MainView_data.js'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import BoardHeaderDecor from '../components/BoardHeaderDecor.vue'
import BoardLogoWatermark from '../components/BoardLogoWatermark.vue'
import capStar from '../assets/otmink-next/cap-star.svg'
import ornamentLeft from '../assets/otmink-next/ornament-left.svg'
import ornamentRight from '../assets/otmink-next/ornament-right.svg'
import ExtraView from './ExtraView.vue'

gsap.registerPlugin(ScrollToPlugin)

const videoRef = ref()
const mainBoardRef = ref()
const test_num = ref(0)
let masterTimeline

// 副榜层（ExtraView 以 embedded 预载在 /main 页内）
const extraRef = ref()
const extraVisible = ref(false)
let extraStarted = false

function buildAnimation({ paused = false } = {}) {
  if (!mainBoardRef.value) return

  masterTimeline?.kill()
  // 是否有副榜（more_data 为非空数组）
  const hasExtra = (data.value.more_data?.length ?? 0) > 0
  // 重建时把已预载的副榜层复位并隐藏，保证整段可重复（重）播
  extraVisible.value = false
  extraStarted = false
  extraRef.value?.reset?.()
  const q = gsap.utils.selector(mainBoardRef.value)
  const fullTime = Math.max(Number(data.value.full_time) || 20, 3)
  // 有副榜时主榜只显示「总时长 − side_duration」，剩余时段交给副榜（ExtraView）
  const sideDuration = hasExtra ? Math.max(Number(data.value.side_duration) || 0, 0) : 0
  const mainTime = Math.max(fullTime - sideDuration, 3)
  const exitAt = Math.max(mainTime - 1, 1.8)
  const resetTargets = q(
    '.main-board, .main-left, .main-right, .back-accent, .back-squares i, .logo-watermark, .weekly-label, .category-label, .left-triangles, .left-diagonal, .left-star, .video-box, .main-rank, .rank, .rank-shadow, .cap, .points, .rank-title, .brand-logo, .count-item, .count-item .icon, .video-ornament, .main-info, .main-title, .chip, .uploader'
  )

  gsap.set(resetTargets, { clearProps: 'transform,opacity,clipPath,filter,zIndex' })
  gsap.set(q('.main-progress'), { clearProps: 'width' })

  masterTimeline = gsap.timeline({ paused, defaults: { ease: 'expo.out' } })
  masterTimeline
    .from(q('.back-accent'), { duration: 1.4, y: -180, opacity: 0 }, 0)
    .from(
      q('.back-squares i'),
      { duration: 0.7, scale: 0.75, opacity: 0, stagger: 0.06, transformOrigin: '50% 50%' },
      0.12
    )
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
    .from(
      q('.video-box'),
      { duration: 1, clipPath: 'inset(0 100% 0 0)', x: -80, transformOrigin: 'left center' },
      0.1
    )
    .from(q('.main-rank'), { duration: 0.9, x: -320 }, 0.08)
    .from(q('.rank-shadow'), { duration: 0.65, x: -70, opacity: 0 }, 0.32)
    .from(
      q('.rank'),
      {
        duration: 0.7,
        scale: 0.72,
        opacity: 0,
        transformOrigin: 'left center',
        ease: 'back.out(1.4)'
      },
      0.3
    )
    .from(
      q('.cap, .points, .rank-title'),
      { duration: 0.55, y: 42, opacity: 0, stagger: 0.08 },
      0.5
    )
    .from(q('.brand-logo'), { duration: 0.75, x: 180, opacity: 0 }, 0.16)
    .from(q('.count-item'), { duration: 0.75, x: 280, opacity: 0, stagger: 0.08 }, 0.28)
    .from(
      q('.count-item .icon'),
      { duration: 0.4, scale: 0, stagger: 0.08, ease: 'back.out(2)' },
      0.54
    )
    .from(
      q('.video-ornament'),
      { duration: 0.7, scaleX: 0, opacity: 0, transformOrigin: 'center' },
      0.58
    )
    .from(q('.main-info'), { duration: 0.85, y: 280 }, 0.34)
    .from(
      q('.main-title, .chip, .uploader'),
      { duration: 0.58, y: 38, opacity: 0, stagger: 0.07 },
      0.65
    )
    .to(q('.main-progress'), { duration: mainTime, width: '100%', ease: 'none' }, 0)

  if (hasExtra) {
    // 有副榜：主榜元素全部退场，只留背景（主/副榜背景一致，可无缝衔接）
    masterTimeline
      .to(q('.main-left'), { duration: 0.9, x: -1920, ease: 'expo.inOut' }, exitAt)
      .to(q('.main-right'), { duration: 0.85, x: 420, ease: 'expo.inOut' }, exitAt)
      .to(q('.main-info'), { duration: 0.8, y: 280, ease: 'expo.inOut' }, exitAt)
      .to(
        q(
          '.video-ornament, .back-accent, .weekly-label, .category-label, .left-triangles, .left-diagonal, .left-star, .logo-watermark'
        ),
        { duration: 0.45, opacity: 0, ease: 'power2.in' },
        exitAt + 0.18
      )
    // 主榜走完后翻层显示副榜并开始动画
    masterTimeline.eventCallback('onComplete', revealExtra)
  } else {
    masterTimeline
      .to(q('.main-left'), { duration: 0.9, x: -1920, ease: 'expo.inOut' }, exitAt)
      .to(q('.main-right'), { duration: 0.85, x: 420, ease: 'expo.inOut' }, exitAt)
      .to(q('.main-info'), { duration: 0.8, y: 280, ease: 'expo.inOut' }, exitAt)
      .to(
        q(
          '.video-ornament, .weekly-label, .category-label, .left-triangles, .left-diagonal, .left-star, .logo-watermark'
        ),
        { duration: 0.45, opacity: 0, ease: 'power2.in' },
        exitAt + 0.18
      )
      .to(q('.back-accent'), { duration: 0.8, opacity: 0, ease: 'expo.inOut' }, exitAt)
      .to(
        q('.back-squares i'),
        { duration: 0.8, opacity: 0, stagger: 0.06, ease: 'expo.inOut' },
        exitAt
      )
  }

  return masterTimeline
}

// 主榜结束（cut 点）后，把已预载的副榜层翻到最上层并开始它的入场动画
function revealExtra() {
  if (extraStarted) return
  extraStarted = true
  const comp = extraRef.value
  if (!comp?.buildAnimation) return
  // 隐藏态下先把副榜从上次状态清理干净并预置好入场起始帧，避免翻层瞬间“闪全貌”
  comp.buildAnimation?.({ paused: true })
  extraVisible.value = true
  comp.play?.()
}

function seek_frame(frame, fps, start_time) {
  if (videoRef.value && Number.isFinite(start_time)) {
    videoRef.value.currentTime = start_time + frame / fps
  }
  masterTimeline?.seek(frame / fps, false)
}

//// 全局函数 统一写在这
window['seek_frame'] = (frame, fps, start_time) => {
  seek_frame(frame, fps, start_time)
}

window['inject'] = async (obj) => {
  await fun(obj)
  await nextTick()
  UpdateCanvasAttribute()
  buildAnimation({ paused: true })
}

window['inject_wvc'] = async (obj) => {
  await fun(obj)
  await nextTick()
  UpdateCanvasAttribute()
  buildAnimation()?.play(0)
}

function UpdateCanvasAttribute() {
  // 将所有 Canvas 元素的 start-time 属性赋值给它本身的 startTime 属性
  const canvasElements = document.querySelectorAll('canvas')
  canvasElements.forEach((canvas) => {
    const startTime = canvas.getAttribute('start-time')
    if (startTime !== null) {
      canvas.startTime = parseFloat(startTime)
    }
  })
}

onMounted(async () => {
  await fun(data.value)
  await nextTick()
  UpdateCanvasAttribute()
})

// 测试专用函数
function testAnimation() {
  test_num.value += 1
  buildAnimation()?.play(0)
}

window['test'] = testAnimation

// 或按下T键触发
document.addEventListener('keydown', (event) => {
  if (event.key === 't' || event.key === 'T') {
    testAnimation()
  }
})

onBeforeUnmount(() => {
  masterTimeline?.kill()
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
  <div ref="mainBoardRef" class="main-board">
    <BoardLogoWatermark />
    <BoardHeaderDecor :title="data.type == 'ytpmv' ? 'YTPMV' : '综合'" />
    <div class="main-left">
      <MainRank />
      <div class="video-box" :style="{ background: data.theme_color }">
        <div v-if="data.prevent == 'true'" class="prevent">规避</div>
        <canvas :src="data.video_src" :class="['video-inner', { preblur: data.prevent == 'true' }]" ref="videoRef"
          :key="data.video_src" :start-time="Math.floor((data.start_time - data.front_reserved_time) * 1000)" muted
          video-capture>
        </canvas>
      </div>
    </div>
    <div class="main-right">
      <div class="brand-logo data-header">
        <span class="data-outline" aria-hidden="true">DATA</span>
        <div class="data-label">
          <span class="data-star" :style="{ '--data-star-mask': `url(${capStar})` }" aria-hidden="true"></span>
          <span>[ DATA ]</span>
        </div>
      </div>
      <MainCounts />
    </div>
    <div class="video-ornament" aria-hidden="true">
      <img :src="ornamentLeft" alt="" />
      <span><i></i><i></i></span>
      <img :src="ornamentRight" alt="" />
    </div>
    <MainInfo />
    <BackgroundImage />
  </div>
  <!-- 副榜层：与主榜同页预载，主榜元素退干净后翻到最上层并开播 -->
  <div v-if="data.more_data?.length" class="extra-stage" :class="{ 'extra-visible': extraVisible }">
    <ExtraView ref="extraRef" :embedded="true" />
  </div>
  <!-- <img class="main-back" :src="data.cover_src" /> -->
  <!-- <img src="https://i0.hdslb.com/bfs/new_dyn/7004c979872d2be6c2ddebfb06f47ff8456935358.jpg@.webp" /> -->
  <!-- 请注意这个img是给background-image盗链服务的，平时使用时给它加上「display: none;」，直接background-image会403 -->
</template>

<style lang="scss" scoped>
.main-board {
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  color: #212121;
  background: #e2e2e2;
}

.main-back {
  position: absolute;
  z-index: -10;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  transform: scale(1.5);
  filter: blur(100px);
  // mix-blend-mode: darken;
}

.video-box {
  position: absolute;
  top: 40px;
  left: 320px;
  width: 1280px;
  height: 720px;
  overflow: hidden;
  background-color: black;

  > * {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.preblur {
  filter: blur(50px) brightness(0.75);
}

.main-left {
  position: absolute;
  z-index: 2;
  inset: 0;
}

.main-right {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 1636px;
  width: 248px;
  height: 800px;

  .main-counts {
    position: absolute;
    top: 270px;
    left: 0;
  }
}

.data-header {
  position: absolute;
  top: 47px;
  left: 0;
  width: 248px;
  height: 224px;
}

.data-outline {
  position: absolute;
  top: 0;
  left: -8.5px;
  color: transparent;
  font-family: 'Bebas Neue', 'Arial Narrow', sans-serif;
  font-size: 256px;
  font-weight: 400;
  line-height: 224px;
  letter-spacing: -12.8px;
  -webkit-text-stroke: 1px rgba(33, 33, 33, 0.2);
}

.data-label {
  position: absolute;
  top: 152px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.8px;
}

.data-star {
  width: 18px;
  height: 18px;
  background: v-bind('data.light_color');
  mask: var(--data-star-mask) center / contain no-repeat;
  -webkit-mask: var(--data-star-mask) center / contain no-repeat;
}

.video-ornament {
  position: absolute;
  z-index: 4;
  top: 772px;
  left: 554px;
  display: flex;
  align-items: center;
  gap: 304px;
  width: 812px;
  height: 16px;

  img {
    width: 94px;
    height: 16px;
  }

  span {
    position: relative;
    width: 16px;
    height: 16px;
  }

  i {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #212121;
  }

  i:last-child {
    right: 0;
    bottom: 0;
  }
}

// 副榜层：覆盖整个 1920×1080 主榜画布，默认隐藏但保持挂载以预载资源
.extra-stage {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  visibility: hidden;
}

.extra-stage.extra-visible {
  visibility: visible;
}

.prevent {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: bolder;
  color: white;
  text-shadow: 4px 4px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

// 测试按钮
.test-button {
  position: absolute;
  z-index: 1000;
}
</style>
