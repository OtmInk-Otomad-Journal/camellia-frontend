<template>
  <span class="badge-repost">
    <svg
      class="badge-repost__frame"
      viewBox="0 0 85 40"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="currentColor" stroke-width="0.5">
        <rect x="0.25" y="0.25" width="84.5" height="39.5" />
        <path d="M8 4H77M8 36H77M4 8V32M81 8V32" />
      </g>
      <g fill="currentColor">
        <rect x="3" y="3" width="2" height="2" />
        <rect x="80" y="3" width="2" height="2" />
        <rect x="3" y="35" width="2" height="2" />
        <rect x="80" y="35" width="2" height="2" />
      </g>
    </svg>
    <svg
      class="badge-repost__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 8H17V6C17 4.9 16.1 4 15 4H3C1.9 4 1 4.9 1 6V15C1 16.1 1.9 17 3 17C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H22C22.55 17 23 16.55 23 16V12.67C23 12.24 22.86 11.82 22.6 11.47L20.3 8.4C20.11 8.15 19.81 8 19.5 8ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z"
      />
    </svg>
    <span>转载</span>
  </span>
</template>

<style lang="scss">
.badge-repost {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 85px;
  height: 40px;
  color: var(--repost-color, white);
  font-family: 'HarmonyOS Sans SC', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.badge-repost__frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.badge-repost__icon {
  flex: 0 0 24px;
  fill: currentColor;
}
</style>
