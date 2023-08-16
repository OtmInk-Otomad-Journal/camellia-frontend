<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
  data: Object
})
</script>

<template>
  <div class="extra-single">
    <div class="rightI">
      <h1 class="side-title">{{ props.data.title }}</h1>
      <div class="side-chips">
        <SideInfoChip :single_data="props.data">av{{ props.data.aid }}</SideInfoChip>
        <SideInfoChip :single_data="props.data">{{ props.data.pubtime }}</SideInfoChip>
      </div>
      <div class="bottom">
        <div class="rank">#{{ props.data.ranking }}</div>
        <div class="points">
          <span>{{ props.data.score }}</span>
          <span>POINTS</span>
        </div>
      </div>
      <SideUploaderInfo :data="props.data" />
    </div>
    <div class="cover-mask"></div>
    <img class="cover" :src="props.data.cover_src" />
  </div>
</template>

<style lang="scss" scoped>
.extra-single {
  @include card;
  @include acrylic;
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  max-height: 200px;
  padding: 1rem;
  margin-top: 30px;
  border-radius: 12px;
  // background-image: linear-gradient(90deg, #fff 33%, transparent);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.18);
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0.5rem;
  opacity: 0.4;
}

.cover-mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgb(233, 233, 233), transparent);
}
.rightI {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .side-chips {
    display: flex;
    gap: 1rem;
  }

  .bottom {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    background-color: transparent;
  }

  .rank {
    font-family: Montserrat, sans-serif;
    font-size: 5rem;
    font-weight: 600;
    margin-top: -0.5rem;
    margin-bottom: -1rem;
    min-width: 10rem;
  }

  .points {
    display: flex;
    gap: 0.5rem;
    font-family: Montserrat, sans-serif;
    font-size: 2rem;
    font-weight: 500;
  }
}

.uploader {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

.side-title {
  margin-bottom: 0.5rem;
}
</style>
