<script setup>
import { data } from '../data/MainView_data.js'
defineProps({
  icon: String,
  title: String,
  count: Number
})
</script>

<template>
  <div class="count-item">
    <div class="left">
      <Icon :name="icon" />
    </div>
    <div class="right">
      <span class="title">{{ title }}</span>
      <span class="count">{{ count }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.count-item {
  @include card;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  width: 100%;
  padding: 1.1rem 1.875rem;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.title {
  font-size: 1rem;
  font-weight: 700;
}

.count {
  font-size: 2rem;
  font-weight: 700;
}
</style>
