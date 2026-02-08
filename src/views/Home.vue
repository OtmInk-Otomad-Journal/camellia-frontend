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
main {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  padding: 2.5rem;
}

nav {
  @include acrylic;
  border-radius: 20px;
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  width: min(920px, calc(100vw - 3rem));
}

nav a {
  @include card;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 1rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--c-ink);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0.12) 45%,
    rgba(255, 255, 255, 0.08) 100%
  );
  border-color: rgba(255, 255, 255, 0.22);
  transition: transform 240ms var(--ease-out), background 240ms var(--ease-out), border-color 240ms var(--ease-out);

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(
      135deg,
      rgba(240, 110, 142, 0.22) 0%,
      rgba(255, 255, 255, 0.14) 45%,
      rgba(255, 255, 255, 0.08) 100%
    );
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0px) scale(0.99);
  }
}

@media (max-width: 760px) {
  nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
