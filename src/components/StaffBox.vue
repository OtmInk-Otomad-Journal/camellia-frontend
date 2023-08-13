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
  background-color: v-bind('data.light_color');
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
}
.staff-name {
  padding: 0 10px;
  font-size: 1.5rem;
  line-height: 2.8rem;
}
</style>
