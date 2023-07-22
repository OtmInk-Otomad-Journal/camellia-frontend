<script setup>
defineProps({
  icon: String,
  title: String,
  count: Number
})
</script>

<template>
  <div class="count-item card">
    <div class="left">
      <Icon :name="icon" />
    </div>
    <div class="right">
      <span class="title">{{ title }}</span>
      <span class="count">{{ count }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.count-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 1.875rem;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.title {
  font-size: 1rem;
  font-weight: 700;
}

.count {
  font-size: 2rem;
  font-weight: 700;
}
</style>
