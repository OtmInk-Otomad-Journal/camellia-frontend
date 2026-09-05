<script setup>
defineProps({ data: Object })
</script>

<template>
  <div class="extra-single">
    <span class="timeline-dot"></span>
    <div class="ca-time">
      <span class="ca-progress">{{ data.progress }}</span>
      <div class="ca-date" v-html="data.date"></div>
    </div>
    <div class="ca-title-box">
      <div class="ca-title" v-html="data.title"></div>
      <div class="ca-subtitle">{{ data.subtitle }}</div>
    </div>
    <div class="ca-cover-frame">
      <img class="cover" :src="data.cover" alt="" />
      <div class="ca-cover-decor" aria-hidden="true">
        <i class="ca-cover-corner ca-cover-corner--start"></i>
        <i class="ca-cover-corner ca-cover-corner--end"></i>
        <span class="ca-cover-rule"></span>
        <span class="ca-cover-plus"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.extra-single {
  position: relative;
  width: 1765px;
  height: 257px;
  will-change: transform;
}

.ca-time {
  position: absolute;
  top: 0;
  left: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 217px;
}

.ca-date {
  font-family: 'Bebas Neue', 'Arial Narrow', sans-serif;
  font-size: 96px;
  line-height: 1;
  letter-spacing: -5.12px;
  white-space: nowrap;
  margin-left: 4px;

  m {
    font-family: 'HarmonyOS Sans SC', sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -3.2px;
    margin-left: -10px;
    margin-right: 2px;
  }
}

.ca-progress {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -3.2px;
  white-space: nowrap;
}

.ca-title-box {
  position: absolute;
  top: 7px;
  left: 447px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 520px;
  height: 203px;
  overflow: hidden;
}

.ca-title {
  max-width: 520px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.08;
  // 最大两行
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-wrap;
}

.ca-subtitle {
  max-width: 520px;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -2px;
}

.ca-cover-frame {
  position: absolute;
  top: 0;
  left: 988px;
  width: 823px;
  height: 217px;
}

.ca-cover-frame .cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  background: #212121;
  z-index: 1;
}

.ca-cover-decor {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  color: #212121;
}

.ca-cover-corner {
  position: absolute;
  width: 28px;
  height: 28px;
  border-color: v-bind('data.color');
  border-style: solid;
}

.ca-cover-corner--start {
  top: -7px;
  left: -7px;
  border-width: 3px 0 0 3px;
}

.ca-cover-corner--end {
  right: -7px;
  bottom: -7px;
  border-width: 0 3px 3px 0;
}

.ca-cover-rule {
  position: absolute;
  top: calc(100% + 15px);
  right: 24px;
  left: 0;
  height: 1px;
  background: currentColor;
  opacity: 0.16;
}

.ca-cover-plus {
  position: absolute;
  top: calc(100% + 9px);
  right: 0;
  width: 13px;
  height: 13px;
  opacity: 0.4;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: currentColor;
  }

  &::before {
    top: 6px;
    left: 0;
    width: 13px;
    height: 1px;
  }

  &::after {
    top: 0;
    left: 6px;
    width: 1px;
    height: 13px;
  }
}

.timeline-dot {
  position: absolute;
  z-index: 2;
  top: 100px;
  left: -11px;
  box-sizing: border-box;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: v-bind('data.color');
}
</style>
