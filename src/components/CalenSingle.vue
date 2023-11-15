<script setup>
const props = defineProps({
  data: Object
})
</script>

<template>
  <div class="extra-single">
    <div class="rightI">
      <div class="ca-time">
        <div class="ca-progress">{{ data.progress }}</div>
        <div class="ca-date" v-html="data.date"></div>
      </div>
      <div class="ca-title-box">
        <div class="ca-title">{{ data.title }}</div>
        <div class="ca-subtitle">{{ data.subtitle }}</div>
      </div>
    </div>
    <div class="cover-mask"></div>
    <img class="cover" :src="data.cover" />
  </div>
</template>

<style lang="scss">
.extra-single {
  @include card;
  @include acrylic;
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  max-height: 200px;
  padding: 1rem;
  margin-top: 30px;
  border-radius: 12px;
  // background-image: linear-gradient(90deg, #fff 33%, transparent);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.18);
}

.cover-mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgb(233, 233, 233), transparent);
}
.rightI {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  height: 6rem;
  justify-content: flex-start;
  width: 100%;
}

.ca-time {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.753);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.18);
  border-radius: 0.5rem;
  min-width: 12rem;
  overflow: hidden;
}

.ca-date {
  display: flex;
  align-items: last baseline;
  justify-content: center;
  padding-bottom: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 3rem;
  font-weight: bolder;
  m {
    font-size: 1rem;
  }
}

.ca-progress {
  background-color: v-bind('data.color');
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
  font-weight: bolder;
}

.ca-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.ca-subtitle {
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.ca-title-box {
  height: 100%;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin-left: 1.5rem;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0.5rem;
  opacity: 0.4;
}
</style>
