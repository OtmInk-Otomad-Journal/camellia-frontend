<script setup>
import { data, fun } from '../data/Calendar_data.js'
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { ScrollToPlugin } from 'gsap/all'
import CalenSingle from '../components/CalenSingle.vue'
gsap.registerPlugin(ScrollToPlugin)

// “全局”变量，既方便函数内调用，也方便外面调用。

let tl_1 = gsap.timeline()

// 动画 使用css选择器
function animate() {
  tl_1.from('.ca-header', {
    duration: 1,
    y: -300,
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
    0.4
  )
  tl_1.from(
    '.ca-box',
    {
      duration: 1,
      y: 2000,
      ease: 'expo.out'
    },
    0.3
  )
  tl_1.to(
    '.ca-box',
    {
      duration: data.value.full_time - 3, // 预留 3 秒给 STAFF
      scrollTo: { y: 'max' },
      ease: 'sine.inOut'
    },
    2
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
})

// 测试专用函数

var test_num = ref(0)
window['test'] = () => {
  if (test_num.value == 0) {
    // animate()
    test_num.value += 1
  }
  tl_1.restart()
}
</script>

<template>
  <div class="big-board">
    <div class="ca-header">音之墨小日历</div>
    <div class="ca-box">
      <CalenSingle v-for="cad in data.more_data" :key="cad" :data="cad" />
    </div>
    <img class="big-bag" src="../assets/background_model_1.png" />
    <img class="big-back" src="../assets/Background.png" />
  </div>
</template>

<style lang="scss" scoped>
.big-board {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
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
  margin-top: 2rem;
  font-weight: bolder;
  text-align: center;
}

.ca-box {
  @include card;
  margin: 2rem 15rem;
  padding: 0 2rem 2rem 2rem;
  overflow: scroll;
  flex-grow: 1;
}
// 测试按钮
.test-button {
  position: absolute;
  z-index: 20;
}

::-webkit-scrollbar {
  width: 0; /* Safari,Chrome 隐藏滚动条 */
  height: 0; /* Safari,Chrome 隐藏滚动条 */
  display: none; /* 移动端、pad 上Safari，Chrome，隐藏滚动条 */
}
</style>
