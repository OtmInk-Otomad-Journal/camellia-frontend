<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        ranking: 123,
        score: 3.373,
        aid: '616084655',
        bvid: 'BV1wh4y1L7mr',
        title: '-冷吟閑酔-',
        uploader: '芙兰厨陈YuYue',
        copyright: '1',
        pubtime: '2023-07-19 11:32:40',
        adjust_scale: '1',
        part: '1',
        web_prefix: 'http://localhost:7213/',
        avatar_src: './avatar/616084655.png',
        cover_src: './cover/616084655.png',
        theme_brightness: 'light'
      }
    }
  }
})
</script>

<template>
  <div class="extra-single">
    <img class="cover" />
    <div class="rightI">
      <h1 class="main-title">{{ props.data.title }}</h1>
      <div class="chips">
        <InfoChip>av{{ props.data.aid }}</InfoChip>
        <InfoChip>{{ props.data.pubtime }}</InfoChip>
      </div>
      <div class="bottom">
        <div class="rank">#{{ props.data.ranking }}</div>
        <div class="points">
          <span>{{ props.data.score }}</span>
          <span>POINTS</span>
        </div>
      </div>
      <UploaderInfo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.extra-single {
  @include card;
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 1rem;
  margin-top: 10px;
}

.cover {
  width: auto;
  height: auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 0.5rem;
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

  .chips {
    display: flex;
    gap: 1rem;
  }

  .bottom {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
  }

  .rank {
    font-family: Montserrat, sans-serif;
    font-size: 5rem;
    font-weight: 600;
    margin-top: -0.5rem;
    margin-bottom: -1rem;
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
</style>
