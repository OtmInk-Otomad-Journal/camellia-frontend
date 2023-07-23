<script setup></script>

<template>
  <div class="chip">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.chip {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background-color: var(--c-accent);
  border-radius: 100rem;
  padding: 0.5rem 1.5rem;
  height: 2.25rem;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}
</style>
