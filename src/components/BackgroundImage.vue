<script setup>
import { data } from '../data/MainView_data'
</script>

<template>
  <img
    class="back-model"
    :src="'./background_model_' + (((isNaN(data.aid) ? 0 : data.aid) % 3) + 1) + '.png'"
  />
  <div class="back-color"></div>
</template>
<style>
.back-model {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
