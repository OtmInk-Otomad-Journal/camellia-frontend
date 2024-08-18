<script setup>
import { RouterView } from 'vue-router'
import '@/assets/global.scss'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
body {
  font-family:
  // 常规黑体
    'HarmonyOS Sans SC', 'Source Han Sans', 'Segoe UI Variable Display', sans-serif,
    // MiSans 生僻字集
    'MiSans L3',
    // https://github.com/MY1L/Unicode
    'Noto Unicode',
    'Monu Hani', 'Monu Han2', 'Monu Han3', 'Noto Serif Tangut', 'Monu Temp',
    // 天珩全字库
    'TH-Tshyn-P0',
    'TH-Tshyn-P1', 'TH-Tshyn-P2', 'TH-Tshyn-P16', 'TH-Times';
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden hidden;
}
</style>
