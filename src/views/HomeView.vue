<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <nav>
      <RouterLink to="/main">Main</RouterLink>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
  nav {
    display: flex;
  }

  nav a {
    font-size: 1rem;
  }
</style>
