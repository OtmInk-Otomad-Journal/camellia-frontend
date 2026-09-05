<script setup>
import logoWatermark from '../assets/otmink-next/logo-watermark.svg'
</script>

<template>
  <img class="logo-watermark" :src="logoWatermark" alt="" aria-hidden="true" />
</template>

<style scoped>
.logo-watermark {
  position: absolute;
  z-index: 2;
  top: -112.5px;
  left: 810.6px;
  width: 298.22px;
  height: 226.48px;
  opacity: 0.08;
  pointer-events: none;
}
</style>
