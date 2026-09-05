<script setup>
import { data } from '../data/MainView_data.js'
import playIcon from '../assets/otmink-next/play.svg'
import likeIcon from '../assets/otmink-next/like.svg'
import coinIcon from '../assets/otmink-next/coin.svg'
import starIcon from '../assets/otmink-next/star.svg'
</script>

<template>
  <div class="main-counts">
    <CountItem title="播放" :count="data.play" :icon="playIcon" />
    <CountItem title="点赞" :count="data.like" :icon="likeIcon" />
    <CountItem title="投币" :count="data.coin" :icon="coinIcon" />
    <CountItem title="收藏" :count="data.star" :icon="starIcon" />
  </div>
</template>

<style lang="scss" scoped>
.main-counts {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 248px;
}
</style>
