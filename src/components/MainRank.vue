<script setup>
import data from "../data/data.js"
</script>

<template>
  <div class="main-rank">
    <div>
      <span class="rank">#{{ data.ranking }}</span>
    </div>
    <span class="points">{{ data.score }} POINTS</span>
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
  font-family: Montserrat, sans-serif;
  font-weight: 600;
}

.points {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
