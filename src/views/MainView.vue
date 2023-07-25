<script setup>
import MainInfo from '../components/MainInfo.vue'
import MainCounts from '../components/MainCounts.vue'
import MainRank from '../components/MainRank.vue'
import data from '../data/data.js';
import { gsap } from 'gsap';
import { onMounted , ref , inject } from 'vue';

let tl_1 = gsap.timeline();
let tl_2 = gsap.timeline();
onMounted(()=>{
  tl_1.from(".video-box",{
      duration: 1,
      rotationX: 90,
      ease: "back.out(2)"
    }),
  tl_1.to(".video-box",{
      duration: 1,
      rotationX: 90,
      ease: "power4.in"
    },data.value.sep_time),
  tl_1.to(".left",{
      duration: 1,
      opacity: 0,
      ease: "power4.in"
    },data.value.sep_time),
  tl_1.to(".right",{
      duration: 1,
      opacity: 0,
      ease: "power4.in"
    },data.value.sep_time),
  tl_2.from(".main-info",{
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "expo.out"
  },0),
  tl_2.from(".main-rank",{
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: "expo.out"
  },0),
  tl_2.from(".main-counts",{
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: "expo.out"
  },0),
  tl_2.from(".count-item",{
    duration: 0.8,
    x: 50,
    opacity: 0,
    stagger: 0.08,
    ease: "expo.out"
  },0),
  tl_2.from(".cover",{
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "expo.out"
  },0),
  tl_2.from(".chip",{
    duration: 0.8,
    delay: 0.2,
    stagger: 0.08,
    y: 50,
    opacity: 0,
    ease: "expo.out"
  },0),
  tl_2.from(".uploader",{
    duration: 0.8,
    delay: 0.4,
    y: 50,
    opacity: 0,
    ease: "expo.out"
  },0),
  tl_2.from(".main-title",{
    duration: 0.8,
    delay: 0.4,
    stagger: 0.08,
    y: 50,
    opacity: 0,
    ease: "expo.out"
  },0),
  tl_2.from(".count",{
    duration: 0.8,
    delay: 0.2,
    stagger: 0.08,
    y: 50,
    opacity: 0,
    ease: "expo.out"
  },0),
  tl_1.pause();
  tl_2.pause();
  seek_frame(20,60,10)
})

const videoRef = ref()

function seek_frame(frame,fps,start_time){
  tl_1.seek( frame / fps );
  tl_2.seek( frame / fps );
  videoRef.currentTime = start_time + ( frame / fps );
}

window['seek_frame'] = (frame,fps,start_time) => { return (seek_frame(frame,fps,start_time)) }
</script>

<template>
  <img
    style="display: none"
    src="https://i0.hdslb.com/bfs/new_dyn/7004c979872d2be6c2ddebfb06f47ff8456935358.jpg@.webp"
  />
  <div class="main-board">
    <div class="left">
      <div class="video-box">
        <video class="video-inner" autoplay ref="videoRef">
          <source :src="data.web_video_src" />
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
</template>

<style lang="scss" scoped>
.main-board {
  aspect-ratio: 16 / 9;
  display: flex;
  // width: 100vw;
  // height: 100vh;
  gap: 2rem;
  padding: 3.5rem 5rem;
  background-image: url(https://i0.hdslb.com/bfs/new_dyn/7004c979872d2be6c2ddebfb06f47ff8456935358.jpg@.webp);
  background-size: 100vw;
  background-position: center;
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
