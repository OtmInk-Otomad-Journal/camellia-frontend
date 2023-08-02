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
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.18);
  border-radius: 100rem;
  padding: 0.5rem 1.5rem;
  height: 2.25rem;
  // color: white;
  filter: brightness(1.2);
  font-weight: 700;
  font-size: 1.25rem;
}
</style>
