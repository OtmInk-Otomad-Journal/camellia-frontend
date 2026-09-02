<script setup>
import { data, fun } from '../data/MainView_data.js'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import BackgroundImage from '../components/BackgroundImage.vue'
import BoardHeaderDecor from '../components/BoardHeaderDecor.vue'
import BoardLogoWatermark from '../components/BoardLogoWatermark.vue'
import ExtraSingle from '../components/ExtraSingle.vue'

gsap.registerPlugin(ScrollToPlugin)

const boardRef = ref()
const test_num = ref(0)
let masterTimeline

function buildAnimation({ paused = false } = {}) {
  if (!boardRef.value) return

  masterTimeline?.kill()
  const q = gsap.utils.selector(boardRef.value)
  const fullTime = Math.max(Number(data.value.full_time) || 10, 3)
  const resetTargets = q(
    '.board-header-decor, .weekly-label, .category-label, .left-triangles, .left-diagonal, .left-star, .logo-watermark, .ca-box, .extra-single, .calendar-ornament'
  )

  gsap.set(resetTargets, { clearProps: 'transform,opacity,clipPath,filter' })
  const boxEl = q('.ca-box')[0]
  if (boxEl) boxEl.scrollTop = 0

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
    .from(q('.ca-box'), { duration: 1, y: 2000 }, 0.3)
    .from(q('.extra-single'), { duration: 1, y: 2000, stagger: 0.08 }, 0.4)
    .from(
      q('.calendar-ornament'),
      { duration: 0.7, scaleX: 0, opacity: 0, transformOrigin: 'center' },
      0.55
    )
    .to(
      q('.ca-box'),
      {
        duration: Math.max(fullTime - 3, 0.1),
        scrollTo: { y: 'max' },
        ease: 'sine.inOut'
      },
      2
    )

  return masterTimeline
}

function seek_frame(frame, fps) {
  masterTimeline?.seek(frame / fps, false)
}

//// 全局函数 统一写在这
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

onMounted(async () => {
  await fun(data.value)
  await nextTick()
})

// 测试专用函数
function testAnimation() {
  test_num.value += 1
  buildAnimation()?.play(0)
}

window['test'] = testAnimation

// 或按下T键触发
function onKeydown(event) {
  if (event.key === 't' || event.key === 'T') {
    testAnimation()
  }
}
document.addEventListener('keydown', onKeydown)

onBeforeUnmount(() => {
  masterTimeline?.kill()
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
    <BackgroundImage />
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

// 测试按钮
.test-button {
  position: absolute;
  z-index: 1000;
}

.ca-box {
  position: absolute;
  z-index: 2;
  top: 197px;
  left: 44px;
  box-sizing: border-box;
  width: 1880px;
  height: 924px;
  padding-left: 11px;
  overflow: auto;
  background-image: linear-gradient(rgba(33, 33, 33, 0.7), rgba(33, 33, 33, 0.7));
  background-position: 10px 0;
  background-repeat: no-repeat;
  background-size: 1px 100%;
  padding-top: 40px;
  margin-top: -40px;
  mask-image: linear-gradient(to bottom, transparent 0px, black 40px);
  padding-bottom: 131px;
}

.calendar-ornament {
  position: absolute;
  z-index: 4;
  top: 1042px;
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
  overflow-y: auto;
  overflow-x: hidden;
  background-image: linear-gradient(rgba(33, 33, 33, 0.7), rgba(33, 33, 33, 0.7));
  background-position: calc(100% - 10px) 0;
  background-repeat: no-repeat;
  background-size: 1px 100%;
  transform: rotate(12.02227669deg);
  transform-origin: top right;
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
  height: 400px;
}
</style>
