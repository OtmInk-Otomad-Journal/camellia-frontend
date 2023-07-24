<script setup>
import MainInfo from '../components/MainInfo.vue'
import MainCounts from '../components/MainCounts.vue'
import MainRank from '../components/MainRank.vue'
import data from '../data/data.js';
import gsap from 'gsap'
import { onMounted, onUnmounted , ref } from 'vue';

var tl = gsap.timeline();
const videoRef = ref();

onMounted(()=>{
  gsap.from(videoRef.value,{
    duration: 1.5,
    rotationX: 90,
    ease: "power3.out"
  })
})
</script>

<template>
  <img style="display: none" src="https://i0.hdslb.com/bfs/new_dyn/7004c979872d2be6c2ddebfb06f47ff8456935358.jpg@.webp" />
  <div class="main-board">
    <div class="left">
      <div class="video-box" ref="videoRef">
        <video class="video-inner">
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
