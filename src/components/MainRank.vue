<template>
  <div class="main-rank card">
    <span class="rank">#16</span>
    <span class="points">23333 POINTS</span>
  </div>
</template>

<style lang="scss" scoped>
  .main-rank {
    display: flex;
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