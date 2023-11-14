<script setup>
import { data, fun } from '../data/Calendar_data.js'
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ScrollToPlugin } from 'gsap/all'
import BackgroundImage from '../components/BackgroundImage.vue'
import CalenSingle from '../components/CalenSingle.vue'
gsap.registerPlugin(ScrollToPlugin)

// “全局”变量，既方便函数内调用，也方便外面调用。

let tl_1 = gsap.timeline()

// let tls = []

const videoRef = ref()

// 动画 使用css选择器
function animate() {
  tl_1.from('.ca-header', {
    duration: 1,
    x: -2000,
    ease: 'expo.out'
  })
  tl_1.from(
    '.extra-single',
    {
      duration: 1,
      x: 2000,
      stagger: 0.08,
      ease: 'expo.out'
    },
    0
  )
}

//// 全局函数 统一写在这
function seek_frame(frame, fps, start_time) {
  tl_1.seek(frame / fps)
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
}

onMounted(() => {
  fun(data.value)
  animate()
})

// 测试专用函数

var test_num = ref(0)
window['test'] = () => {
  if (test_num.value == 0) {
    animate()
    test_num.value += 1
  }
  tl_1.restart()
}
</script>

<template>
  <div class="ca-header">音之墨小日历</div>
  <div class="ca-box" v-for="cad in data.more_data" :key="cad">
    <CalenSingle :data="cad" />
  </div>
  <img class="big-bag" src="background_model_1.png" />
  <img class="big-back" src="Background.png" />
</template>

<style lang="scss" scoped>
.big-bag {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
  z-index: -20;
  top: 0;
  left: 0;
}
.big-back {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  top: 0;
  left: 0;
  z-index: -21;
}
.ca-header {
  width: 100%;
  font-size: 4rem;
  margin: 3rem auto;
  font-weight: bolder;
  text-align: center;
}

.ca-box {
  padding: 0 15rem;
}
// 测试按钮
.test-button {
  position: absolute;
  z-index: 20;
}
</style>
