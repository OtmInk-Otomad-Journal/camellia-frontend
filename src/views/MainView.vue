<script setup>
import MainInfo from '../components/MainInfo.vue'
import MainCounts from '../components/MainCounts.vue'
import MainRank from '../components/MainRank.vue'
import ExtraList from '../components/ExtraList.vue'
import BackgroundImage from '../components/BackgroundImage.vue'
import { data, fun } from '../data/MainView_data.js'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ref, onMounted, inject } from 'vue'
import TransitionImage from '../components/TransitionImage.vue'
import { danmuku, changeDmkFrame } from '../ccl/CommentCoreLibrary.js'
gsap.registerPlugin(ScrollToPlugin)

// 弹幕插件
const videoBoxRef = ref()

// “全局”变量，既方便函数内调用，也方便外面调用。

let tl_1 = gsap.timeline()
let tl_2 = gsap.timeline()
let tl_3 = gsap.timeline()
let tl_4 = gsap.timeline()
let tl_5 = gsap.timeline()

var danmakuList = [
  {
    mode: 5,
    text: 'Hello World',
    stime: 0,
    size: 25,
    color: 0x66ccff
  },
  {
    mode: 2,
    text: 'Hello DASDWorld',
    stime: 1,
    size: 50,
    color: 0x66ccff
  },
  {
    mode: 1,
    text: '他战胜了自己，他爱老大哥',
    stime: 50,
    size: 25,
    color: 0x66ccff
  }
]
const videoRef = ref()
const comments = ref()
// 动画 使用css选择器
function animate() {
  // 过渡用图动画
  tl_5.to(
    '.transition-image',
    {
      opacity: 0,
      duration: 1
    },
    0
  )
  tl_1.from('.video-box', {
    duration: 1,
    rotationX: 90,
    ease: 'back.out(1.8)'
  })
  tl_2.from(
    '.main-info',
    {
      duration: 0.8,
      y: 50,
      rotationX: 90,
      ease: 'expo.out'
    },
    0
  )
  tl_2.from(
    '.main-rank',
    {
      duration: 0.8,
      x: 550,
      // rotationX: 90,
      ease: 'expo.out'
    },
    0
  )
  tl_2.from(
    '.main-left',
    {
      duration: 0.8,
      x: -1440,
      ease: 'expo.out'
    },
    0
  )
  tl_2.from(
    '.main-rank .rank',
    {
      delay: 0.1,
      duration: 0.4,
      scale: 0,
      ease: 'back.out(2.0)'
    },
    0
  )
  tl_2.from(
    '.main-rank .points',
    {
      delay: 0.1,
      duration: 0.5,
      scale: 0,
      y: 50,
      ease: 'back.out(0.8)'
    },
    0
  )
  tl_2.from(
    '.main-counts',
    {
      duration: 0.8,
      x: 450,
      opacity: 0,
      rotationX: 90,
      ease: 'expo.out'
    },
    0
  )
  tl_2.from(
    '.count-item',
    {
      duration: 0.8,
      x: 50,
      rotationY: 90,
      stagger: 0.08,
      ease: 'expo.out'
    },
    0
  )
  tl_2.from(
    '.cover',
    {
      duration: 0.7,
      delay: 0.2,
      x: 550,
      // y: 50,
      // rotationX: 90,
      ease: 'expo.out'
    },
    0
  )
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
  )
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
  )
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
  tl_2.from(
    '.count',
    {
      duration: 0.8,
      delay: 0.2,
      stagger: 0.08,
      y: 50,
      opacity: 0,
      ease: 'expo.out'
    },
    0
  )
  tl_2.from(
    '.count-item .title',
    {
      duration: 0.8,
      delay: 0.1,
      stagger: 0.04,
      y: 80,
      opacity: 0,
      ease: 'expo.out'
    },
    0
  )
  tl_2.from(
    '.count-item .icon',
    {
      duration: 0.4,
      delay: 0.1,
      stagger: 0.08,
      scale: 0,
      opacity: 0,
      ease: 'back.out(2.0)'
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
  // 副榜动画
  if (data.value.more_data) {
    tl_4.to(
      '.main-board',
      {
        filter: 'blur(100px)',
        scale: 1.25
      },
      data.value.full_time - data.value.side_duration
    )
    tl_4.fromTo(
      '.extra-board',
      {
        opacity: 0
      },
      {
        duration: 2,
        opacity: 1
      },
      '<'
    )
    tl_4.to('.viewlist', {
      duration: data.value.side_duration - 2 - 3, // 预留 3 秒给 STAFF
      scrollTo: { y: 'max' },
      ease: 'sine.inOut'
    })
  }
  if (!data.value.more_data) {
    tl_5.to(
      '.transition-image',
      {
        opacity: 1,
        duration: 0.5
      },
      data.value.full_time - 0.5
    )
    tl_1.to(
      '.main-left',
      {
        duration: 1,
        x: -1400,
        ease: 'expo.in'
      },
      data.value.full_time - 1
    )
    tl_1.to(
      '.main-right',
      {
        duration: 1,
        x: 550,
        ease: 'expo.in'
      },
      data.value.full_time - 1
    )
  }
}

function seek_frame(frame, fps, start_time) {
  videoRef.value.currentTime = start_time + frame / fps
  changeDmkFrame(frame, fps, start_time)
  tl_1.seek(frame / fps)
  tl_2.seek(frame / fps)
  tl_3.seek(frame / fps)
  tl_4.seek(frame / fps)
  tl_5.seek(frame / fps)
}

//// 全局函数 统一写在这
window['seek_frame'] = (frame, fps, start_time) => {
  seek_frame(frame, fps, start_time)
}

window['inject'] = (obj) => {
  fun(obj).then(() => {
    animate()
  })
  // 初始化
  danmuku(danmakuList)
  /*
  tl_1.pause()
  tl_2.pause()
  tl_3.pause()
  tl_4.pause()
  tl_5.pause()*/
}

// 测试专用函数
var test_num = ref(0)
window['test'] = () => {
  if (test_num.value == 0) {
    // animate()
    test_num.value += 1
  }
  tl_1.restart()
  tl_2.restart()
  tl_3.restart()
  tl_4.restart()
  tl_5.restart()
}

onMounted(() => {
  fun(data.value)
})
</script>

<template>
  <button class="test-button" v-if="test_num != 0" onclick="test()">重播动画</button>
  <ExtraList class="extra-list" v-if="data.more_data" :more_data="data.more_data" />
  <div class="main-board">
    <div class="main-left">
      <div class="video-box" :style="{ background: data.theme_color }" ref="videoBoxRef">
        <div class="abp">
          <div ref="comments" id="vd" class="container"></div>
          <video class="video-inner" ref="videoRef" :key="data.video_src" muted autoplay>
            <source :src="data.video_src" />
          </video>
        </div>
      </div>
      <MainInfo />
    </div>
    <div class="main-right">
      <MainRank />
      <MainCounts />
      <img class="cover" :src="data.cover_src" />
    </div>
    <TransitionImage />
    <BackgroundImage />
  </div>
  <!-- <img class="main-back" :src="data.cover_src" /> -->
  <!-- <img src="https://i0.hdslb.com/bfs/new_dyn/7004c979872d2be6c2ddebfb06f47ff8456935358.jpg@.webp" /> -->
  <!-- 请注意这个img是给background-image盗链服务的，平时使用时给它加上「display: none;」，直接background-image会403 -->
</template>

<style lang="scss" scoped>
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
  background-color: black;
  > * {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
  }
}

.cover {
  @include card;
  width: auto;
  height: auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
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
.video-inner {
  position: absolute;
}
// 测试按钮
.test-button {
  position: absolute;
  z-index: 1000;
}

.abp {
  @include card;
  width: auto;
  height: auto;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  flex-shrink: 0;
  background-color: black;
  > * {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
  }
}
.abp .container {
  border: 0;
  bottom: 0;
  display: block;
  left: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  touch-callout: none;
  -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 999999;
}
.abp .container .cmt {
  color: #fff;
  font-family: SimHei, SimSun, Heiti, 'MS Mincho', Meiryo, 'Microsoft YaHei', monospace;
  font-size: 25px;
  letter-spacing: 0;
  line-height: 100%;
  margin: 0;
  padding: 3px 0 0 0;
  position: absolute;
  text-decoration: none;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
  -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  white-space: pre;
  word-break: keep-all;
}
.abp .container .cmt.no-shadow {
  text-shadow: none;
}
.abp .container .cmt.reverse-shadow {
  text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
}
.abp .container .cmt.css-optimize {
  will-change: transform;
}
@font-face {
  font-family: '\9ED1\4F53';
  src: local('SimHei');
}
@font-face {
  font-family: '\5B8B\4F53';
  src: local('SimSun');
}
@font-face {
  font-family: '\534E\6587\6977\4F53';
  src: local('SimKai');
}
@font-face {
  font-family: '\5E7C\5706';
  src: local('YouYuan');
}
@font-face {
  font-family: '\5FAE\8F6F\96C5\9ED1';
  src: local('Microsoft YaHei');
}
</style>
