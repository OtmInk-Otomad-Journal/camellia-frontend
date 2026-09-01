<script setup>
defineProps({ data: Object })
</script>

<template>
  <div class="extra-single">
    <span class="timeline-dot" :style="{ backgroundColor: data.color }"></span>
    <div class="ca-time">
      <span class="ca-progress">{{ data.progress }}</span>
      <div class="ca-date" v-html="data.date"></div>
    </div>
    <div class="ca-title-box">
      <div class="ca-title">{{ data.title }}</div>
      <div class="ca-subtitle">{{ data.subtitle }}</div>
    </div>
    <img class="cover" :src="data.cover" alt="" />
  </div>
</template>

<style lang="scss">
.extra-single {
  position: relative;
  width: 1765px;
  height: 257px;
}

.ca-time {
  position: absolute;
  top: 0;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 217px;
}

.ca-date {
  font-family: 'Bebas Neue', 'Arial Narrow', sans-serif;
  font-size: 128px;
  line-height: 1;
  letter-spacing: -5.12px;
  white-space: nowrap;

  m {
    font-family: 'HarmonyOS Sans SC', sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -3.2px;
  }
}

.ca-progress { font-size: 40px; font-weight: 700; letter-spacing: -3.2px; white-space: nowrap; }

.ca-title-box {
  position: absolute;
  top: 7px;
  left: 447px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 465px;
  height: 203px;
  overflow: hidden;
}

.ca-title { max-width: 465px; font-size: 64px; font-weight: 700; line-height: 1.08; letter-spacing: -5.12px; }
.ca-subtitle { max-width: 465px; font-size: 36px; font-weight: 700; letter-spacing: -2.88px; }

.cover {
  position: absolute;
  top: 0;
  left: 912px;
  width: 823px;
  height: 217px;
  overflow: hidden;
  object-fit: cover;
  clip-path: polygon(4% 0, 100% 0, 100% 100%, 0 100%);
}

.timeline-dot {
  position: absolute;
  z-index: 2;
  top: 100px;
  left: -11px;
  width: 21px;
  height: 21px;
  border: 5px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(33, 33, 33, 0.05);
}
</style>
