<script setup>
import { data } from '../data/MainView_data.js'

defineProps({
  icon: String,
  title: String,
  count: [Number, String]
})
</script>

<template>
  <div class="count-item">
    <div class="count-head">
      <span class="title">{{ title }}</span>
    </div>
    <div class="count-value">
      <span class="count">{{ count }}</span>
      <span class="icon" :style="{ '--icon-mask': `url(${icon})` }" aria-hidden="true"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.count-item {
  position: relative;
  width: 100%;
  height: 86px;
  overflow: visible;

  &::after {
    position: absolute;
    right: 0;
    bottom: -0.5px;
    left: 0;
    height: 1px;
    background: #929292;
    content: '';
  }
}

.count-head {
  height: 23px;
  color: v-bind('data.light_color');
}

.title {
  font-family: 'HarmonyOS Sans SC', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -1px;
}

.count-value {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 45px;
  margin-top: 8px;
}

.count {
  display: block;
  flex: 1;
  min-width: 0;
  color: #212121;
  font-family: 'Outfit', 'HarmonyOS Sans SC', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
  white-space: nowrap;
}

.icon {
  display: block;
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  background: v-bind('data.light_color');
  mask-image: var(--icon-mask);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-image: var(--icon-mask);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}
</style>
