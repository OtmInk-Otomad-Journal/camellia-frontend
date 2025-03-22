<script setup>
defineProps({
  single_data: Object
})
</script>

<template>
  <div class="side-chip">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.side-chip {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  // background-color: var(--c-accent);
  background-color: v-bind('single_data.dark_color');
  // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.18);
  border-radius: 100rem;
  padding: 0.25rem 1rem;
  height: 2rem;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
}
</style>
