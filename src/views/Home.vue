<script setup></script>

<template>
  <main>
    <nav>
      <RouterLink to="/main">主榜 / 副榜</RouterLink>
      <RouterLink to="/transition">过渡</RouterLink>
      <RouterLink to="/backicons">动态背景</RouterLink>
      <RouterLink to="/pick">Pick</RouterLink>
      <RouterLink to="/viewpick">观众选模板</RouterLink>
      <RouterLink to="/calendar">日历</RouterLink>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100vw;
  height: 100vh;
}

nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 1rem;
  text-decoration: none;
  background-color: hsla(var(--c-otmink-h), var(--c-otmink-s), var(--c-otmink-l), 1);
  border-radius: 4px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    background-color: hsla(var(--c-otmink-h), var(--c-otmink-s), calc(var(--c-otmink-l) + 5%), 1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: hsla(var(--c-otmink-h), var(--c-otmink-s), calc(var(--c-otmink-l) - 5%), 1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
