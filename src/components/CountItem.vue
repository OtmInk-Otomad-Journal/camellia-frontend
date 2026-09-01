<script setup>
import { data } from '../data/MainView_data.js'
import headerBase from '../assets/otmink-next/count-header-base.svg'
import headerAccent from '../assets/otmink-next/count-header-accent.svg'

defineProps({
  icon: String,
  title: String,
  count: [Number, String]
})
</script>

<template>
  <div class="count-item">
    <div
      class="count-head"
      :style="{
        '--header-base-mask': `url(${headerBase})`,
        '--header-accent-mask': `url(${headerAccent})`
      }"
    >
      <span class="header-base"></span>
      <span class="header-accent"></span>
      <span class="title">{{ title }}</span>
    </div>
    <span class="icon" :style="{ '--icon-mask': `url(${icon})` }"></span>
    <span class="count">{{ count }}</span>
  </div>
</template>

<style lang="scss" scoped>
.count-item {
  position: relative;
  width: 100%;
  height: 122px;
  overflow: visible;
  background: white;
  border-bottom: 1px solid v-bind('data.dark_color');
}

.count-head {
  position: relative;
  display: flex;
  align-items: center;
  width: 183px;
  height: 48px;
  padding-left: 16px;
  overflow: visible;
  color: white;
  background: transparent;
}

.header-base,
.header-accent {
  position: absolute;
  top: 0;
  left: 0;
  height: 48px;
  mask-repeat: no-repeat;
  mask-position: left top;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: left top;
  -webkit-mask-size: 100% 100%;
}

.header-base {
  width: 183px;
  background: v-bind('data.dark_color');
  mask-image: var(--header-base-mask);
  -webkit-mask-image: var(--header-base-mask);
}

.header-accent {
  width: 99.846px;
  background: v-bind('data.light_color');
  mask-image: var(--header-accent-mask);
  -webkit-mask-image: var(--header-accent-mask);
}

.title {
  position: relative;
  z-index: 1;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -1px;
}

.count {
  display: block;
  padding: 0 14px;
  color: #212121;
  font-family: 'Outfit', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 73px;
}

.icon {
  position: absolute;
  z-index: 2;
  top: -14px;
  right: -17px;
  width: 73px;
  height: 73px;
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
