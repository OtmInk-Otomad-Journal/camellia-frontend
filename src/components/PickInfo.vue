<script setup>
import { data } from '../data/MainView_data.js'
defineProps({
  picker: String,
  reason: String
})
</script>

<template>
  <div class="pick-info" :class="data.theme_brightness">
    <div class="pick-picker-box">
      <div style="width: 40px">赞图标</div>
      <div class="pick-picker">{{ picker }}</div>
    </div>
    <div class="pick-reason">
      {{ reason }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pick-info {
  @include card;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  // gap: 4.75rem;
  padding: 1.5rem 1.75rem;
}
.pick-picker-box {
  display: flex;
  flex-direction: row;
}
.pick-picker {
  font-size: 1.8rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 10px;
}
.pick-reason {
  display: -webkit-box;
  top: 0;
  margin-top: 20px;
  font-size: 1.25rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.9rem;
  -webkit-line-clamp: 18;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
}
</style>
