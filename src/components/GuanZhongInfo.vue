<script setup>
import { data } from '../data/MainView_data.js'
</script>

<template>
  <div class="view-box">
    <div class="main-info">
      <h1 class="main-title">{{ data.title }}</h1>
      <div class="details">
        <div class="chips">
          <InfoChip><span v-if="!isNaN(data.aid)">av</span>{{ data.aid }}</InfoChip>
          <InfoChip v-if="data.pubtime">{{ data.pubtime }}</InfoChip>
        </div>
        <UploaderInfo v-if="data.uploader != 'UNCHECKABLE'" />
      </div>
      <div class="main-progress"></div>
    </div>
    <div class="view-point">
      <div>{{ data.score }}<span> 票</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-point {
  height: 100%;
  padding: 0 1.5rem;
  color: white;
  font-family: 'Montserrat';
  font-weight: bolder;
  font-size: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: v-bind('data.dark_color');
}
.view-point span {
  font-size: 1.5rem;
  font-weight: normal;
}
.view-box {
  @include card;
  @include acrylic;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  white-space: nowrap;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // gap: 4.75rem;
  padding: 1.5rem 1.75rem;
  flex-grow: 1;
  overflow: hidden;

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
