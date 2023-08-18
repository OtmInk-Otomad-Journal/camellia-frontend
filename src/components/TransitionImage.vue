<script setup></script>

<template>
  <div class="transition-image"></div>
</template>
<style scoped>
.transition-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../assets/transition_back.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -5;
}
</style>
