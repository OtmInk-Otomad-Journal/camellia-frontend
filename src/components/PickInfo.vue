<script setup>
import { data } from '../data/MainView_data.js'
defineProps({
  picker: String,
  reason: String
})
</script>

<template>
  <div class="pick-info">
    <div class="pick-picker-box">
      <svg
        class="pick-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 3 45 40"
        width="40"
        height="40"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.409 38.3182V16.5811H12.8771C10.5607 16.5811 8.68176 18.4534 8.68176 20.7646V34.1347C8.68176 36.4459 10.5607 38.3182 12.8771 38.3182H15.409ZM17.9318 38.3182V16.534C21.344 15.3075 23.283 12.1888 23.751 7.01373C23.9342 4.9876 25.8641 4.14564 27.7034 5.03358C29.5283 5.91464 30.7321 8.13973 30.7321 11.1126C30.7321 12.8907 30.5101 14.7138 30.0669 16.5811H38.1136C40.4357 16.5811 42.3181 18.4635 42.3181 20.7856C42.3181 21.1247 42.2771 21.4625 42.196 21.7917L39.5421 32.5609C38.7088 35.942 35.676 38.3182 32.1937 38.3182H17.9335H17.9318Z"
        />
      </svg>
      <div class="pick-picker">{{ picker }}</div>
    </div>
    <div class="pick-reason">
      {{ reason }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pick-icon {
  fill: v-bind('data.dark_color');
  // filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  z-index: 20;
}
.pick-info {
  @include card;
  @include acrylic;
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
  align-items: center;
}
.pick-picker {
  font-size: 1.8rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 10px;
  z-index: 19;
}
.pick-reason {
  display: -webkit-box;
  top: 0;
  margin-top: 15px;
  font-size: 1.25rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.95rem;
  -webkit-line-clamp: 18;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
}
</style>
