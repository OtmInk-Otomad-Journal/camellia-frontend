<script setup>
import ExtraSingle from '../components/ExtraSingle.vue'
import datas from '../data/ExtraView_data.js'
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
let tl_1 = gsap.timeline()
let tl_2 = gsap.timeline()
let tl_3 = gsap.timeline()
let tl_4 = gsap.timeline()

window['e_inject'] = (obj) => {
  datas.value = obj
  animate()
}
function animate() {
  tl_1.from('#es0', {
    duration: 0.8,
    x: -1500
  })
  tl_1.to('#es0', {
    delay: 2.5,
    x: 1500
  })
  tl_2.from('#es1', {
    duration: 0.8,
    x: -1500
  })
  tl_2.to('#es1', {
    delay: 2.5,
    x: 1500
  })
  tl_3.from('#es2', {
    duration: 0.8,
    x: -1500
  })
  tl_3.to('#es2', {
    delay: 2.5,
    x: 1500
  })
  tl_4.from('#es3', {
    duration: 0.8,
    x: -1500
  })
  tl_4.to('#es3', {
    delay: 2.5,
    x: 1500
  })
}

onMounted(() => {
  console.log(datas.value)
  animate()
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
