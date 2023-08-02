<script setup>
import ExtraSingle from '../components/ExtraSingle.vue'
defineProps({
  more_data: Object
})
</script>

<template>
  <div class="extra-board">
    <div class="left">
      <ExtraSingle v-for="i in 4" :key="i" :data="datas[i - 1]" :id="'es' + (i - 1)" />
    </div>
    <div class="right"></div>
    <video class="back-video"></video>
  </div>
</template>

<style lang="scss" scoped>
.extra-board {
  aspect-ratio: 16 / 9;
  display: flex;
  gap: 2rem;
  padding: 3.5rem 5rem;
  background-size: 100vw;
  background-position: center;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
}

.right {
  width: 500px;
  flex-shrink: 0;
}
.back-video {
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
}
</style>
