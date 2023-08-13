<template>
  <img
    style="
      border-radius: 50%;
      height: 30px;
      width: 30px;
      vertical-align: sub;
      display: inline-block;
      margin-right: 10px;
    "
    :src="props.path"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  path: String
})
</script>
