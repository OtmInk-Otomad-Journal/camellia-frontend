<script setup>
  import InfoChip from '../components/InfoChip.vue'
</script>

<template>
  <div class="main-info card">
    <h1>哇哈哈哈这是一个标题哇哈哈哈这是一个标题</h1>
    <div class="details">
      <div class="left">
        <InfoChip>AVXXXXXX</InfoChip>
        <InfoChip>2023/04/04 23:48:37</InfoChip>
      </div>
      <Uploader>虚无韵</Uploader>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 4.75rem;
  padding: 1.5rem 1.75rem;

  h1 {
    font-size: 2.5rem;
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
