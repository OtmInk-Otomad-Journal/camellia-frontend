<script setup>
import { data, fun } from '../data/Calendar_data.js'
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import { ScrollToPlugin } from 'gsap/all'
import CalenSingle from '../components/CalenSingle.vue'
import BackgroundImage from '../components/BackgroundImage.vue'
import BoardHeaderDecor from '../components/BoardHeaderDecor.vue'
import BoardLogoWatermark from '../components/BoardLogoWatermark.vue'
import ornamentLeft from '../assets/otmink-next/ornament-left.svg'
import ornamentRight from '../assets/otmink-next/ornament-right.svg'

gsap.registerPlugin(ScrollToPlugin)
let tl_1 = gsap.timeline()

function animate() {
  tl_1.from('.ca-header, .calendar-watermark', { duration: 1, y: -300, ease: 'expo.out' })
  tl_1.from('.extra-single', { duration: 1, x: 2000, stagger: 0.08, ease: 'expo.out' }, 0.4)
  tl_1.from('.ca-box', { duration: 1, y: 2000, ease: 'expo.out' }, 0.3)
  tl_1.to('.ca-box', { duration: data.value.full_time - 3, scrollTo: { y: 'max' }, ease: 'sine.inOut' }, 2)
}

window['seek_frame'] = (frame, fps) => tl_1.seek(frame / fps)
window['inject'] = (obj) => {
  fun(obj).then(() => animate())
  tl_1.pause()
}
window['inject_wvc'] = (obj) => fun(obj).then(() => animate())
onMounted(() => fun(data.value))

const test_num = ref(0)
window['test'] = () => {
  if (test_num.value == 0) test_num.value += 1
  tl_1.restart()
}
</script>

<template>
  <div class="big-board">
    <BoardLogoWatermark class="calendar-watermark" />
    <BoardHeaderDecor class="ca-header" title="音之墨小日历" />
    <div class="ca-box">
      <CalenSingle v-for="cad in data.more_data" :key="cad" :data="cad" />
    </div>
    <div class="calendar-ornament" aria-hidden="true">
      <img :src="ornamentLeft" alt="" />
      <span><i></i><i></i></span>
      <img :src="ornamentRight" alt="" />
    </div>
    <BackgroundImage />
  </div>
</template>

<style lang="scss" scoped>
.big-board {
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  color: #212121;
  background: #e2e2e2;
}

.ca-box {
  position: absolute;
  z-index: 2;
  top: 197px;
  left: 44px;
  box-sizing: border-box;
  width: 1776px;
  height: 793px;
  padding-left: 11px;
  overflow: auto;
  background-image: linear-gradient(rgba(33, 33, 33, 0.7), rgba(33, 33, 33, 0.7));
  background-position: 10px 0;
  background-repeat: no-repeat;
  background-size: 1px 100%;
}

.calendar-ornament {
  position: absolute;
  z-index: 4;
  top: 1042px;
  left: 554px;
  display: flex;
  align-items: center;
  gap: 304px;
  width: 812px;
  height: 16px;

  img { width: 94px; height: 16px; }
  span { position: relative; width: 16px; height: 16px; }
  i { position: absolute; width: 8px; height: 8px; background: #212121; }
  i:last-child { right: 0; bottom: 0; }
}

::-webkit-scrollbar { width: 0; height: 0; display: none; }
</style>
