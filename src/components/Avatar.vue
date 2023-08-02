<template>
  <img
    style="
      border-radius: 50%;
      height: 25px;
      width: 25px;
      vertical-align: sub;
      display: inline-block;
    "
    :src="props.path"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  path: String
})
</script>

<style>
. {
}
</style>
