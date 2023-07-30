<template>
  <div class="main-board">
    <div class="awindow" id="a">下一个</div>
    <div class="awindow" id="b">更精彩</div>
  </div>
  <div class="process"></div>
  <img class="main-back" :src="data.cover_src" />
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { data } from '../data/MainView_data.js'
import { onMounted } from 'vue'

let tl_1 = gsap.timeline()
let tl_2 = gsap.timeline()
let tl_3 = gsap.timeline()

function animate() {
  tl_1
    .fromTo(
      '#a',
      {
        y: -500,
        duration: 0.8,
        delay: 0.2,
        ease: 'expo.out'
      },
      {
        y: '50%',
        ease: 'linear'
      }
    )
    .then(() => {})

  tl_1
    .fromTo(
      '#b',
      {
        y: -500,
        duration: 0.8,
        delay: 1,
        ease: 'expo.out'
      },
      {
        y: '50%',
        ease: 'linear'
      }
    )
    .then(() => {
      tl_1.fromTo(
        '#b',
        {
          y: '50%',
          duration: 0.8,
          delay: 6,
          ease: 'expo.out'
        },
        {
          y: 1500,
          ease: 'linear'
        }
      )
    })
  tl_1.fromTo(
    '.main-back',
    {
      opacity: '100%',
      duration: 5
    },
    {
      ease: 'linear',
      opacity: '0%'
    }
  )
  tl_1.fromTo(
    '#a',
    {
      y: '50%',
      duration: 0.8,
      delay: 5.2,
      ease: 'expo.out'
    },
    {
      y: 1500,
      ease: 'linear'
    }
  )
}

window['t_inject'] = (obj) => {
  data.value = obj
  animate()
}
onMounted(() => {
  animate()
})
</script>

<style lang="scss">
.awindow {
  font-size: 5rem;
  font-weight: 700;
}
.main-board {
  justify-content: center;
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
</style>
