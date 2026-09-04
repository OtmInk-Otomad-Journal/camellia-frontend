<script setup>
import { data, fun } from '../data/Calendar_data.js'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import CalenSingle from '../components/CalenSingle.vue'
import BackgroundImage from '../components/BackgroundImage.vue'
import BoardHeaderDecor from '../components/BoardHeaderDecor.vue'
import BoardLogoWatermark from '../components/BoardLogoWatermark.vue'
import ornamentLeft from '../assets/otmink-next/ornament-left.svg'
import ornamentRight from '../assets/otmink-next/ornament-right.svg'

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
    <BoardHeaderDecor class="ca-header" title="音之墨小日历" />
    <div class="ca-box">
      <CalenSingle v-for="cad in data.more_data" :key="cad" :data="cad" />
    </div>
    <div class="calendar-ornament" aria-hidden="true">
      <img :src="ornamentLeft" alt="" />
      <span><i></i><i></i></span>
      <img :src="ornamentRight" alt="" />
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
  top: 108px;
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

::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
</style>
