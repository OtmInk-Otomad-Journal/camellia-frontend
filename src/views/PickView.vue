<script setup>
import PickInfo from '../components/PickInfo.vue'
import MainInfo from '../components/MainInfo.vue'
import { data, fun } from '../data/MainView_data.js'
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ScrollToPlugin } from 'gsap/all'
import BackgroundImage from '../components/BackgroundImage.vue'
import TransitionImage from '../components/TransitionImage.vue'

gsap.registerPlugin(ScrollToPlugin)

// “全局”变量，既方便函数内调用，也方便外面调用。

let tl_1 = gsap.timeline()
let tl_2 = gsap.timeline()
let tl_3 = gsap.timeline()
let tl_4 = gsap.timeline()
let tl_5 = gsap.timeline()
let tl_6 = gsap.timeline()
// let tls = []

const videoRef = ref()

// 动画 使用css选择器
function animate() {
  tl_1.from('.video-box', {
    duration: 1,
    rotationX: 90,
    ease: 'expo.out'
  })
  tl_1.to(
    '.main-left',
    {
      duration: 1,
      x: -1400,
      ease: 'expo.in'
    },
    data.value.full_time - 1
  ),
    tl_1.to(
      '.main-right',
      {
        duration: 1,
        x: 550,
        ease: 'expo.in'
      },
      data.value.full_time - 1
    )

  tl_2.from(
    '.main-info',
    {
      duration: 0.8,
      y: 50,
      rotationX: 90,
      ease: 'expo.out'
    },
    0
  ),
    tl_2.from(
      '.main-left',
      {
        duration: 0.8,
        x: -1440,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.pick-info',
      {
        duration: 0.8,
        x: 550,
        rotationX: 90,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.pick-picker-box .pick-icon',
      {
        delay: 0.1,
        duration: 0.5,
        x: -100,
        y: 20,
        scale: 0,
        ease: 'back.out(1.0)',
        rotateZ: 60
      },
      0
    ),
    tl_2.from(
      '.pick-picker-box .pick-picker',
      {
        delay: 0.2,
        duration: 0.5,
        x: -100,
        scale: 0,
        ease: 'back.out(1.0)'
      },
      0
    ),
    tl_2.from(
      '.pick-reason',
      {
        duration: 0.8,
        delay: 0.3,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.cover',
      {
        duration: 0.7,
        delay: 0.1,
        x: 550,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.chip',
      {
        duration: 0.8,
        delay: 0.4,
        stagger: 0.06,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.uploader',
      {
        duration: 0.8,
        delay: 0.4,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.main-title',
      {
        duration: 0.8,
        delay: 0.5,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    )
  tl_3.to(
    '.main-progress',
    {
      duration: data.value.full_time,
      width: '100%',
      ease: 'linear'
    },
    0
  )
  tl_4.to('.pick-reason', {
    duration: data.value.full_time,
    scrollTo: { y: 'max' },
    ease: 'sine.inOut'
  })
  // 过渡用图动画
  tl_5.to('.transition-image', {
    opacity: 0,
    duration: 1
  })
  tl_5.to(
    '.transition-image',
    {
      opacity: 1,
      duration: 0.5
    },
    data.value.full_time - 0.5
  )
  tl_6.from('.logo', { duration: 0.75, x: -1000, ease: 'expo.out' })
  tl_6.to(
    '.logo',
    {
      duration: 1,
      x: -1000,
      ease: 'expo.in'
    },
    data.value.full_time - 1
  )
}

//// 全局函数 统一写在这
function seek_frame(frame, fps, start_time) {
  tl_1.seek(frame / fps)
  tl_2.seek(frame / fps)
  tl_3.seek(frame / fps)
  tl_4.seek(frame / fps)
  tl_5.seek(frame / fps)
  tl_6.seek(frame / fps)
  videoRef.value.currentTime = start_time + frame / fps
}

//// 全局函数 统一写在这
window['seek_frame'] = (frame, fps, start_time) => {
  seek_frame(frame, fps, start_time)
}

window['inject'] = (obj) => {
  fun(obj).then(() => {
    UpdateCanvasAttribute()
    animate()
  })
  tl_1.pause()
  tl_2.pause()
  tl_3.pause()
  tl_4.pause()
  tl_5.pause()
  tl_6.pause()
}

window['inject_wvc'] = (obj) => {
  fun(obj).then(() => {
    UpdateCanvasAttribute()
    animate()
  })
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

onMounted(() => {
  fun(data.value)
})

// 测试专用函数

var test_num = ref(0)
window['test'] = () => {
  if (test_num.value == 0) {
    animate()
    test_num.value += 1
  }
  tl_1.restart()
  tl_2.restart()
  tl_3.restart()
  tl_4.restart()
  tl_5.restart()
  tl_6.restart()
}
</script>

<template>
  <img v-if="data.activity == 'wc'" class="logo" src="/WeeklyC.png" />
  <button class="test-button" v-if="test_num != 0" onclick="test()">重播动画</button>
  <div class="main-board">
    <div class="main-left">
      <div class="video-box" :style="{ background: data.theme_color }">
        <div v-if="data.prevent == 'true'" class="prevent">规避</div>
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
      <MainInfo special_text="PICK UP" />
    </div>
    <div class="main-right">
      <PickInfo :reason="data.reason" :picker="data.picker" />
      <img class="cover" :src="data.cover_src" />
    </div>
    <TransitionImage />
    <BackgroundImage />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 25rem;
  position: absolute;
  top: 0.5rem;
  left: 2.5rem;
  z-index: 16;
  filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.5));
}
.main-board {
  aspect-ratio: 16 / 9;
  display: flex;
  // width: 100vw;
  // height: 100vh;
  gap: 2rem;
  padding: 3.5rem 5rem;
  // background-image: url('https://i0.hdslb.com/bfs/new_dyn/7004c979872d2be6c2ddebfb06f47ff8456935358.jpg@.webp');
  background-size: 100vw;
  background-position: center;
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
  @include card;
  width: auto;
  height: auto;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
}

.preblur {
  filter: blur(50px) brightness(0.75);
}

.video-inner {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-position: center;
  object-fit: contain;
}

.cover {
  @include card;
  width: auto;
  height: auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
}

.main-left,
.main-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
}

.main-left {
  width: 0px;
}

.main-right {
  flex-shrink: 0;
  max-width: 26.875rem;
}
.extra-list {
  position: absolute;
  z-index: 100;
}

.dplayer-controller {
  display: none !important;
}
.dplayer-controller-mask {
  display: none !important;
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
  z-index: 20;
}
</style>
