<script setup>
import { data } from '../data/MainView_data.js'
defineProps({
  job: String
})
</script>

<template>
  <div class="staff-box">
    <div class="staff-job">
      {{ job }}
    </div>
    <div class="staff-name">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.staff-box {
  min-width: 50px;
  background-color: transparent;
  margin-bottom: 20px;
}
.staff-job {
  min-width: 200px;
  padding: 5px 10px;
  border-radius: 8px;
  margin-bottom: 5px;
  /* background-color: var(--c-accent); */
  background-color: v-bind('data.dark_color');
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
.staff-name {
  padding: 0 10px;
  font-size: 1.5rem;
  line-height: 2.8rem;
  font-weight: 500;
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.35);
}
</style>
