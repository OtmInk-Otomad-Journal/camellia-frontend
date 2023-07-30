<script setup>
import ExtraSingle from '../components/ExtraSingle.vue';
</script>

<template>
  <div class="extra-board">
    <div class="left">
      <ExtraSingle />
      <ExtraSingle />
      <ExtraSingle />
      <ExtraSingle />
    </div>
    <div class="right"></div>
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
</style>