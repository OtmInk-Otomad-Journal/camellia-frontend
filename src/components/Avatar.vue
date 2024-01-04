<template>
  <img
    style="
      border-radius: 50%;
      height: 30px;
      width: 30px;
      vertical-align: sub;
      display: inline-block;
      margin-right: 10px;
      border: 1px solid rgba(255, 255, 255, 0.5);
    "
    :src="props.path"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  path: String
})
</script>
