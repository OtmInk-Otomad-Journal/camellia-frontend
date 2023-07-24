<script setup>
import data from '../data/data.js'
</script>

<template>
  <div class="main-counts">
    <CountItem icon="play" title="播放" :count="data.play" />
    <CountItem icon="like" title="点赞" :count="data.like" />
    <CountItem icon="coin" title="投币" :count="data.coin" />
    <CountItem icon="star" title="收藏" :count="data.star" />
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
