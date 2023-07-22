<script setup>
import MainInfo from '../components/MainInfo.vue'
import MainCounts from '../components/MainCounts.vue'
import MainRank from '../components/MainRank.vue'
</script>

<template>
  <div class="main-board">
    <div class="left">
      <div class="video-box card"></div>
      <MainInfo />
    </div>
    <div class="right">
      <MainRank />
      <MainCounts />
      <div class="cover card"></div>
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
}

.video-box {
  width: auto;
  height: auto;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  flex-shrink: 0;
}

.cover {
  width: auto;
  height: auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
}

.left, .right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
}

.right {
  max-width: 26.875rem;
}
</style>
