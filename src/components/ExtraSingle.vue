<script setup>
const props = defineProps({
  data: Object
})
</script>

<template>
  <div class="extra-single">
    <div class="left-number">
      <div class="rank">{{ data.ranking }}</div>
      <div class="score">
        <b>{{ data.score }}</b> CAP
      </div>
    </div>
    <img class="cover" :src="data.cover" alt="Cover" />
    <div class="info">
      <div class="title-box">
        <div class="title">{{ data.title }}</div>
      </div>
      <SideUploaderInfo :data="data" class="side-up" />
      <div class="chips">
        <InfoChip>av{{ data.aid }}</InfoChip>
        <InfoChip>{{ data.pubtime }}</InfoChip>
        <InfoChip v-if="data.score_add">{{ data.score_add }}</InfoChip>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.extra-single {
  position: relative;
  width: 100%;
  transform-origin: center right;
  display: flex;
  flex-direction: row;
}

.rank {
  font-family: 'Bebas Neue', 'Arial Narrow', sans-serif;
  font-size: 144px;
  letter-spacing: -4%;
  color: #000000;
  min-width: 112px;
  margin-top: -24px;
}

.score {
  width: 106px;
  font-family: 'Outfit', sans-serif;
  text-align-last: justify;
  font-size: 24px;
  margin-top: -36px;
  letter-spacing: -5%;
  color: #000000;
}

.cover {
  height: 148px;
  border-left: 8px solid v-bind('data.dark_color');
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background-color: #202020;
  margin-left: 8px;
  // 裁剪右下角
  clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
}

.title {
  font-family: 'HarmonyOS Sans SC', sans-serif;
  font-size: 40px;
  color: #000000;
  font-weight: 700;
  // 最大两行，超出省略
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.2;
}

.title-box {
  display: flex;
  align-items: center;
  height: 98px;
}

.info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  flex-grow: 1;
  margin-right: 48px;
}

.chips {
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 16px;
  > * + * {
    padding-left: 16px;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }
}

.chip {
  color: black !important;
}

.side-up {
  position: absolute;
  bottom: 0;
  left: -20px;
}
</style>
