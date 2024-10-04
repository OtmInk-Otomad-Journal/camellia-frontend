<script setup>
import { onMounted } from 'vue'
import { data, fun } from '../data/MainView_data'

// onMounted(() => {
//   fun(data.value)
// })
</script>

<template>
  <!-- <img class="back-model" :src="'./background_model_' + ((data.aid % 3) + 1) + '.png'" /> -->
  <div class="back-model">
    <img class="icon-1" src="../assets/backicons/3dicons-1.webp" />
    <img class="icon-2" src="../assets/backicons/3dicons-2.webp" />
    <img class="icon-3" src="../assets/backicons/3dicons-3.webp" />
    <img class="icon-4" src="../assets/backicons/3dicons-4.webp" />
    <img class="icon-5" src="../assets/backicons/3dicons-5.webp" />
    <img class="icon-6" src="../assets/backicons/3dicons-6.webp" />
    <img class="icon-7" src="../assets/backicons/3dicons-7.webp" />
  </div>
  <div class="back-color"></div>
</template>
<style>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.icon-1 {
  position: absolute;
  top: -15%;
  left: -10%;
  width: 40%;
  filter: blur(5px);
  animation: rotate 60s linear infinite reverse;
}
.icon-2 {
  position: absolute;
  top: 20%;
  left: 60%;
  width: 20%;
  animation: rotate 70s linear infinite;
}
.icon-3 {
  position: absolute;
  top: 30%;
  left: 20%;
  width: 60%;
  filter: blur(20px);
  animation: rotate 82s linear infinite reverse;
}
.icon-4 {
  position: absolute;
  top: 60%;
  left: 5%;
  width: 20%;
  animation: rotate 100s linear infinite;
}
.icon-5 {
  position: absolute;
  top: -10%;
  left: 78%;
  width: 30%;
  filter: blur(3px);
  animation: rotate 67s linear infinite;
}
.icon-6 {
  position: absolute;
  top: 65%;
  left: 80%;
  width: 20%;
  animation: rotate 93s linear infinite;
}
.icon-7 {
  position: absolute;
  top: -10%;
  left: 36%;
  width: 25%;
  filter: blur(10px);
  animation: rotate 84s linear infinite reverse;
}
.back-model {
  position: absolute;
  width: 100%;
  height: 100%;
  mix-blend-mode: overlay;
  z-index: -20;
  top: 0;
  left: 0;
}
.back-color {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  top: 0;
  left: 0;
  background: radial-gradient(
    255.04% 135.55% at 0% -2.55%,
    v-bind('data.light_color') 0%,
    v-bind('data.dark_color') 100%
  );
  z-index: -21;
}
</style>
