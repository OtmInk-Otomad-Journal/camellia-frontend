<script setup>
import data from '../data/data.js'
</script>

<template>
  <div class="uploader">
    <div class="avatar"></div>
    <div class="text">
      <span class="name">{{ data.uploader }}</span>
      <div class="badge-repost">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.5 8H17V6C17 4.9 16.1 4 15 4H3C1.9 4 1 4.9 1 6V15C1 16.1 1.9 17 3 17C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H22C22.55 17 23 16.55 23 16V12.67C23 12.24 22.86 11.82 22.6 11.47L20.3 8.4C20.11 8.15 19.81 8 19.5 8ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z"
          />
        </svg>

        转载
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.uploader {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  // height: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.5);
}

.text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.25rem;
}

.badge-repost {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.5rem;
  background-color: white;
  color: var(--c-accent);
  fill: var(--c-accent);
  font-size: 1.25rem;
  font-weight: bold;
  height: 100%;
  padding: 0.25rem 0.5rem;
}

.avatar {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 100rem;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
