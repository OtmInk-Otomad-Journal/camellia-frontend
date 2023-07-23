<script setup>
  import InfoChip from '../components/InfoChip.vue'
  import data from '../data/data.js';
</script>

<template>
  <div class="main-info">
    <h1>{{ data.title }}</h1>
    <div class="details">
      <div class="left">
        <InfoChip>{{ data.aid }}</InfoChip>
        <InfoChip>{{ data.pubtime }}</InfoChip>
      </div>
      <Uploader>{{data.uploader}}</Uploader>
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

    .left {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
