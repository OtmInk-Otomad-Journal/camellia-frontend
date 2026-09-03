<script setup>
import { data } from '../data/MainView_data.js'
defineProps({
  special_text: String
})
</script>

<template>
  <div class="main-info">
    <img class="info-background" :src="data.cover_src" alt="" />
    <div class="main-progress"></div>
    <div class="info-content">
      <div class="title-block">
        <h1 class="main-title">{{ data.title }}</h1>
        <div class="chips">
          <InfoChip>av{{ data.aid }}</InfoChip>
          <InfoChip>{{ data.pubtime }}</InfoChip>
          <InfoChip v-if="data.score_add">{{ data.score_add }}</InfoChip>
        </div>
      </div>
      <UploaderInfo />
    </div>
    <div class="special_text">{{ special_text }}</div>
  </div>
</template>

<style lang="scss" scoped>
.special_text {
  position: absolute;
  z-index: 1;
  color: #e83939;
  opacity: 0.14;
  right: 0;
  bottom: 0;
  margin-right: 48px;
  margin-bottom: -12px;
  font-size: 150px;
  font-weight: 900;
  font-style: italic;
}
.main-progress {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.08);
}

.main-info {
  position: absolute;
  z-index: 4;
  top: 800px;
  left: 0;
  width: 1920px;
  height: 280px;
  overflow: hidden;
  color: white;
  background: #303030;

  h1 {
    width: 1580px;
    font-size: 48px;
    font-weight: 900;
    line-height: 1.17;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.info-background {
  position: absolute;
  inset: -390px 0 auto;
  width: 1920px;
  height: 1080px;
  object-fit: cover;
  opacity: 0.28;
  mix-blend-mode: overlay;
  filter: grayscale(1) contrast(1.2);
}

.info-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 912px;
  margin: 47px 0 0 320px;
}

.title-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chips {
  display: flex;
  align-items: center;
  gap: 16px;

  > * + * {
    padding-left: 16px;
    border-left: 1px solid rgba(255, 255, 255, 0.75);
  }
}
</style>
