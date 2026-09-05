<script setup>
import { data } from '../data/MainView_data.js'
defineProps({
  job: String
})
</script>

<template>
  <div class="staff-box">
    <div class="staff-job">
      <slot name="icon"></slot>
      {{ job }}
    </div>
    <div class="staff-name">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.staff-box {
  position: relative;
  min-width: 0;
  width: 100%;
}

.staff-box + .staff-box::before {
  content: '';
  position: absolute;
  top: -10px;
  right: 0;
  left: 0;
  height: 1px;
  background: rgba(33, 33, 33, 0.18);
}

.staff-job {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 42px;
  color: v-bind('data.dark_color');
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;

  :deep(svg) {
    width: 20px;
    height: 20px;
  }
}

.staff-name {
  padding-top: 4px;
  color: #212121;
  font-family: 'Outfit', 'HarmonyOS Sans SC', sans-serif;
  font-size: 23px;
  line-height: 36px;
  font-weight: 500;
}
</style>
