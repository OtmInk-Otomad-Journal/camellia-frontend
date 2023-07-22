<script setup>
defineProps({
  rank: Number,
  points: Number
})
</script>

<template>
  <div class="main-rank">
    <span class="rank">#{{ rank }}</span>
    <span class="points">{{ points }} POINTS</span>
  </div>
</template>

<style lang="scss" scoped>
.main-rank {
  @include card;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1rem 1rem 1rem;
  background-color: var(--c-accent);
  color: white;
}

.rank {
  font-size: 6rem;
  font-weight: 400;
}

.points {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
