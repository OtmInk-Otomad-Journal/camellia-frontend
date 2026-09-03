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
      <div class="pick-picker">{{ picker }}</div>
    </div>
    <div class="pick-reason">
      <div class="pick-reason-inner">
        {{ reason }}
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <defs>
      <clipPath id="picker-box-clip">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M400 100H0V99.9102L99.9102 0H400V100ZM0 87.0303V62.6406L62.6406 0H87.0303L0 87.0303ZM0 36.1211V0H36.1211L0 36.1211Z"
          fill="#E83939"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<style lang="scss" scoped>
.pick-info {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 542px;
}

.pick-picker-box {
  position: absolute;
  width: 400px;
  height: 100px;
  right: 0;
  background: v-bind('data.light_color');
  clip-path: url(#picker-box-clip);
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  text-align: right;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.pick-picker {
  // 最大两行，超出省略
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.pick-reason {
  top: 100px;
  position: absolute;
  width: 100%;
  height: 620px;
  background: #303030;
  color: #fff;
  font-size: 24px;
  line-height: 1.65;
  box-sizing: border-box;
  padding: 20px;
}

.pick-reason-inner {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  text-align: justify;
}

.pick-reason-inner::-webkit-scrollbar {
  width: 0;
  display: none;
}
</style>
