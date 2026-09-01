<script setup>
import { data } from '../data/MainView_data.js'
</script>

<template>
  <div class="background-stage" aria-hidden="true">
    <div class="back-color"></div>
    <div class="back-orb"></div>
    <div class="back-accent"></div>
    <div class="back-model"></div>
    <div class="back-squares">
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </div>
  </div>
</template>

<style scoped>
/* Figma background frame 8:2877, kept in its original coordinate system. */
.background-stage {
  position: absolute;
  z-index: 1;
  top: -875px;
  left: -360px;
  width: 2313px;
  height: 2318.034px;
  overflow: visible;
  pointer-events: none;
}

.back-color {
  position: absolute;
  top: 875px;
  left: 360px;
  width: 1920px;
  height: 1080px;
  background-color: #e2e2e2;
  background-image:
    linear-gradient(90deg, #212121 1px, transparent 1px),
    linear-gradient(#212121 1px, transparent 1px),
    linear-gradient(
      45deg,
      transparent calc(50% - 0.5px),
      #212121 calc(50% - 0.5px),
      #212121 calc(50% + 0.5px),
      transparent calc(50% + 0.5px)
    );
  background-position: top left;
  background-size: 100px 100px;
  opacity: 0.04;
}

.back-orb {
  position: absolute;
  top: 0;
  left: 1445.326px;
  width: 1181px;
  height: 2044px;
  border-radius: 50%;
  background: #fff;
  filter: blur(391.5px);
  opacity: 0.77;
  transform: rotate(45deg);
  transform-origin: top left;
}

.back-accent {
  position: absolute;
  top: 245.444px;
  left: 1782.433px;
  width: 549.976px;
  height: 2114.122px;
  overflow: hidden;
  background: linear-gradient(to bottom, v-bind('data.dark_color'), #fff);
  transform: rotate(33deg);
  transform-origin: top left;
}

.back-accent::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../assets/noise_asset.png');
  background-size: 256px 256px;
  mix-blend-mode: multiply;
  opacity: 0.06;
}

.back-squares {
  position: absolute;
  top: 870px;
  left: 1923px;
  width: 402px;
  height: 783px;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.6));
}

.back-squares i {
  position: absolute;
  box-sizing: border-box;
  border: 1px solid #fff;
}

.back-squares i:nth-child(1) {
  top: 0;
  left: 246px;
  width: 115px;
  height: 115px;
}

.back-squares i:nth-child(2) {
  top: 95px;
  left: 213px;
  width: 50px;
  height: 50px;
}

.back-squares i:nth-child(3) {
  top: 145px;
  left: 17px;
  width: 128px;
  height: 128px;
}

.back-squares i:nth-child(4) {
  top: 360px;
  left: 287px;
  width: 103px;
  height: 103px;
}

.back-squares i:nth-child(5) {
  top: 551px;
  left: 0;
  width: 81px;
  height: 81px;
}

.back-squares i:nth-child(6) {
  top: 712px;
  left: 262px;
  width: 71px;
  height: 71px;
}

.back-model {
  position: absolute;
  top: 875px;
  left: 360px;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background: #d9d9d9;
  mix-blend-mode: color-burn;
}

.back-model::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../assets/noise_asset.png');
  background-repeat: repeat;
  background-position: top left;
  background-size: 256px 256px;
  opacity: 0.035;
}
</style>
