<script setup>
import CountItem from './CountItem.vue'
defineProps({
  playCount: Number,
  likeCount: Number,
  coinCount: Number,
  starCount: Number
})
</script>

<template>
  <div class="main-counts">
    <CountItem icon="play" title="播放" :count="playCount" />
    <CountItem icon="like" title="点赞" :count="likeCount" />
    <CountItem icon="coin" title="投币" :count="coinCount" />
    <CountItem icon="star" title="收藏" :count="starCount" />
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
