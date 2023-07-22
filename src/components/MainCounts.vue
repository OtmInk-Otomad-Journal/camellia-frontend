<script setup>
import CountItem from './CountItem.vue'
</script>

<template>
  <div class="main-counts">
    <CountItem icon="play" title="播放" count="233" />
    <CountItem icon="like" title="点赞" count="233" />
    <CountItem icon="coin" title="投币" count="233" />
    <CountItem icon="star" title="收藏" count="233" />
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
