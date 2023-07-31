<script setup>
const props = defineProps({
  data: Object
})
</script>

<template>
  <div class="extra-single" :class="props.data.theme_brightness">
    <img class="cover" />
    <div class="right">
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
}

.cover {
  width: auto;
  height: auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 0.5rem;
}

.right {
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
