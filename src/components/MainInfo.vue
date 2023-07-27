<script setup>
import data from '../data/MainView_data.js'
</script>

<template>
  <div class="main-info" ref="main_info_Ref">
    <h1 class="main-title">{{ data.title }}</h1>
    <div class="details">
      <div class="chips">
        <InfoChip>AV{{ data.aid }}</InfoChip>
        <InfoChip>{{ data.pubtime }}</InfoChip>
      </div>
      <UploaderInfo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-info {
  @include card;
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
