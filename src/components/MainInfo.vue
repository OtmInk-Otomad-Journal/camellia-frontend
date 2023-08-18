<script setup>
import { data } from '../data/MainView_data.js'
defineProps({
  special_text: String
})
</script>

<template>
  <div class="main-info">
    <h1 class="main-title">{{ data.title }}</h1>
    <div class="details">
      <div class="chips">
        <InfoChip>av{{ data.aid }}</InfoChip>
        <InfoChip>{{ data.pubtime }}</InfoChip>
      </div>
      <UploaderInfo />
    </div>
    <div class="main-progress"></div>
    <div class="special_text">{{ special_text }}</div>
  </div>
</template>

<style lang="scss" scoped>
.special_text {
  position: absolute;
  z-index: -1;
  color: v-bind('data.light_color');
  opacity: 0.4;
  right: 0;
  bottom: 0;
  margin-right: 3.5rem;
  margin-bottom: 1rem;
  font-size: 8rem;
  font-weight: bolder;
  font-style: italic;
  font-family: 'Montserrat';
}
.main-progress {
  position: absolute;
  top: 0;
  left: 0;
  // background-color: var(--c-accent);
  background-color: v-bind('data.dark_color');
  opacity: 0.18;
  height: 100%;
  width: 0;
  z-index: -1;
}

.main-info {
  @include card;
  @include acrylic;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  // gap: 4.75rem;
  padding: 1.5rem 1.75rem;

  h1 {
    font-size: 2.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .chips {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
