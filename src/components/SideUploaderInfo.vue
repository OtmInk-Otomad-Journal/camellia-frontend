<script setup>
import RepostBadge from './RepostBadge.vue'
defineProps({
  data: Object
})
</script>

<template>
  <div class="uploader">
    <div class="avatar">
      <img :src="data.avatar_src" />
    </div>
    <div class="text">
      <span class="name">{{ data.uploader }}</span>
      <RepostBadge v-if="data.copyright == 2 || data.copyright == '2'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.uploader {
  --repost-color: v-bind('data.dark_color');

  display: flex;
  align-items: center;
  gap: 8px;
}

.text {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.name {
  color: black;
  font-family: 'Outfit', 'HarmonyOS Sans SC', sans-serif;
  font-size: 20px;
  font-weight: 400;
  background-color: transparent;
}
</style>
