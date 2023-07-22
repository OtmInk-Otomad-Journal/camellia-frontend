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
      <div class="cover"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-board {
  display: flex;
  width: 100vw;
  height: 100vh;
  gap: 3rem;
  padding: 2rem;
}

.video-box {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.left, .right {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex-grow: 1;
}
</style>
