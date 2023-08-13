<script setup>
import MainInfo from '../components/MainInfo.vue'
import MainCounts from '../components/MainCounts.vue'
import MainRank from '../components/MainRank.vue'
import ExtraList from '../components/ExtraList.vue'
import { data, fun } from '../data/MainView_data.js'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { onMounted } from 'vue'
import TransitionImage from '../components/TransitionImage.vue'

gsap.registerPlugin(ScrollToPlugin)

// “全局”变量，既方便函数内调用，也方便外面调用。

let tl_1 = gsap.timeline()
let tl_2 = gsap.timeline()
let tl_3 = gsap.timeline()
let tl_4 = gsap.timeline()
let tl_5 = gsap.timeline()
// let tls = []

const videoRef = ref()

// 动画 使用css选择器
function animate() {
  tl_1.from('.video-box', {
    duration: 1,
    rotationX: 90,
    ease: 'back.out(1.8)'
  })
  tl_1.to(
    '.left',
    {
      duration: 0.5,
      x: -2000,
      ease: 'expo.in'
    },
    data.value.full_time - 0.5
  ),
    tl_1.to(
      '.right',
      {
        duration: 0.5,
        x: 800,
        ease: 'expo.in'
      },
      data.value.full_time - 0.5
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
      '.main-rank',
      {
        duration: 0.8,
        x: 50,
        rotationX: 90,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.main-counts',
      {
        duration: 0.8,
        x: 50,
        rotationX: 90,
        ease: 'expo.out'
      },
      0
    ),
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
    ),
    tl_2.from(
      '.cover',
      {
        duration: 0.8,
        y: 50,
        rotationX: 90,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.chip',
      {
        duration: 0.8,
        delay: 0.2,
        stagger: 0.08,
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
        delay: 0.4,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
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
        filter: 'blur(50px)'
      },
      data.value.full_time - data.value.side_duration
    )
    tl_4.fromTo(
      '.extra-board',
      {
        opacity: 0
      },
      {
        duration: 1,
        opacity: 1
      }
    )
    tl_4.to('.viewlist', {
      duration: data.value.side_duration - 1,
      scrollTo: { y: 'max' },
      ease: 'sine.inOut'
    })
  }
  // 过渡用图动画
  tl_5.to('.transition-image', {
    opacity: 0,
    duration: 1
  })
  if (!data.value.more_data) {
    tl_5.to(
      '.transition-image',
      {
        opacity: 1,
        duration: 0.5
      },
      data.value.full_time - 0.5
    )
  }
}

function seek_frame(frame, fps, start_time) {
  tl_1.seek(frame / fps)
  tl_2.seek(frame / fps)
  tl_3.seek(frame / fps)
  tl_4.seek(frame / fps)
  tl_5.seek(frame / fps)
  videoRef.value.currentTime = start_time + frame / fps
}

//// 全局函数 统一写在这
window['seek_frame'] = (frame, fps, start_time) => {
  seek_frame(frame, fps, start_time)
}

window['inject'] = (obj) => {
  fun(obj).then(() => {
    animate()
  })
  tl_1.pause()
  tl_2.pause()
  tl_3.pause()
  tl_4.pause()
  tl_5.pause()
}

onMounted(() => {
  fun(data.value)
})

/*
test data:
左边收起

inject([{
  score: 0,
  aid: '616084655',
  bvid: 'BV1wh4y1L7mr',
  title: '-热吟閑酔-',
  uploader: '蕾咪厨陈YuYue',
  copyright: '0.5',
  pubtime: '2077-07-19 11:32:40',
  adjust_scale: '1',
  part: '1',
  web_prefix: 'http://localhost:7213/',
  avatar_src: './avatar/616084655.png',
  cover_src: './cover/616084655.png',
  theme_brightness: 'light',
  ranking: 11
},{
  score: 11.4,
  aid: '616084655',
  bvid: 'BV1wh4y1L7mr',
  title: '-吟閑酔-',
  uploader: '蕾咪厨陈YuYue',
  copyright: '5',
  pubtime: '2077-07-19 11:32:40',
  adjust_scale: '1',
  part: '1',
  web_prefix: 'http://localhost:7213/',
  avatar_src: './avatar/616084655.png',
  cover_src: './cover/616084655.png',
  theme_brightness: 'light',
  ranking: 0
},{
  score: -5,
  aid: '616084655',
  bvid: 'BV1wh4y1L7mr',
  title: '-吟閑酔-',
  uploader: '蕾咪厨陈YuYue',
  copyright: '5',
  pubtime: '2077-07-19 11:32:40',
  adjust_scale: '1',
  part: '1',
  web_prefix: 'http://localhost:7213/',
  avatar_src: './avatar/616084655.png',
  cover_src: './cover/616084655.png',
  theme_brightness: 'light',
  ranking: 191
},{
  score: -66,
  aid: '616084655',
  bvid: 'BV1wh4y1L7mr',
  title: '-吟閑酔-',
  uploader: '蕾咪厨陈YuYue',
  copyright: '5',
  pubtime: '2077-07-19 11:32:40',
  adjust_scale: '1',
  part: '1',
  web_prefix: 'http://localhost:7213/',
  avatar_src: './avatar/616084655.png',
  cover_src: './cover/616084655.png',
  theme_brightness: 'light',
  ranking: 191
}])

*/
</script>

<template>
  <ExtraList class="extra-list" v-if="data.more_data" :more_data="data.more_data" />
  <div class="main-board">
    <div class="left">
      <div class="video-box" :style="{ background: data.theme_color }">
        <video class="video-inner" ref="videoRef" :key="data.video_src">
          <source :src="data.video_src" />
        </video>
      </div>
      <MainInfo />
    </div>
    <div class="right">
      <MainRank />
      <MainCounts />
      <img class="cover" :src="data.cover_src" />
    </div>
  </div>
  <!-- <TransitionImage /> -->
  <!-- <img class="main-back" :src="data.cover_src" /> -->
</template>

<style lang="scss" scoped>
.main-board {
  aspect-ratio: 16 / 9;
  display: flex;
  // width: 100vw;
  // height: 100vh;
  gap: 2rem;
  padding: 3.5rem 5rem;
  background-image: url('https://i0.hdslb.com/bfs/new_dyn/7004c979872d2be6c2ddebfb06f47ff8456935358.jpg@.webp');
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
}

.video-inner {
  width: 100%;
  height: 100%;
}

.cover {
  @include card;
  width: auto;
  height: auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
}

.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
}

.left {
  width: 0px;
}

.right {
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
</style>
