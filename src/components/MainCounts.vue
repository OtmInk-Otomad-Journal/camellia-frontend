<script setup>
import { data } from '../data/MainView_data.js'
</script>

<template>
  <div class="main-counts">
    <CountItem icon="play" title="播放" :count="data.play" :class="data.theme_brightness" />
    <CountItem icon="like" title="点赞" :count="data.like" :class="data.theme_brightness" />
    <CountItem icon="coin" title="投币" :count="data.coin" :class="data.theme_brightness" />
    <CountItem icon="star" title="收藏" :count="data.star" :class="data.theme_brightness" />
  </div>
</template>

<style lang="scss" scoped>
.main-counts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}
</style>
