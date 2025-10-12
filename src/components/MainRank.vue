<script setup>
import { data } from '../data/MainView_data.js'
import { NewspaperFolding } from '@icon-park/vue-next'
</script>

<template>
  <div class="main-rank">
    <div class="rank-title">社群关注指数 (CAP)</div>
    <div class="rank-box">
      <div>
        <span class="rank"
          ><newspaper-folding style="display: inline-flex; align-items: center" theme="outline" />{{
            data.ranking
          }}</span
        >
      </div>
      <span class="points">{{ data.score }} POINTS</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-rank {
  @include card;
  display: flex;
  // flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.25rem 1rem 1rem 1rem;
  // background-color: var(--c-accent);
  background-color: v-bind('data.dark_color');
  color: white;
}

.rank {
  display: flex;
  font-size: 5rem;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  gap: 0.15em;

  .i-icon {
    font-size: 0.9em;
    margin-top: -0.1em;
  }
}

.rank-box {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 1em;
}

.rank-title {
  margin-top: 0.5em;
  margin-left: auto;
  font-size: 1.5em;
  font-weight: bold;
}

.points {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
