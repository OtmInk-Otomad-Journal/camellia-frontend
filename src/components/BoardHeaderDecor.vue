<script setup>
import leftTriangles from '../assets/otmink-next/left-triangles.svg'
import leftDiagonal from '../assets/otmink-next/left-diagonal.svg'
import leftStar from '../assets/otmink-next/left-star.svg'

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="board-header-decor">
    <div class="weekly-label">OTOMAD WEEKLY RANKING</div>
    <div class="category-label">
      <span class="pixel-mark"><i></i><i></i><i></i><i></i><i></i></span>
      <strong>{{ title }}</strong>
    </div>
    <img class="left-triangles" :src="leftTriangles" alt="" aria-hidden="true" />
    <img class="left-diagonal" :src="leftDiagonal" alt="" aria-hidden="true" />
    <img class="left-star" :src="leftStar" alt="" aria-hidden="true" />
  </div>
</template>

<style lang="scss" scoped>
.board-header-decor {
  position: absolute;
  z-index: 4;
  inset: 0;
  pointer-events: none;
}

.weekly-label {
  position: absolute;
  top: 14px;
  left: 744px;
  width: 431px;
  font-family: 'Outfit', sans-serif;
  font-size: 10px;
  letter-spacing: 15px;
  white-space: nowrap;
}

.category-label {
  position: absolute;
  top: 40px;
  left: 36px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 24px;
  letter-spacing: -1.92px;
}

.pixel-mark {
  position: relative;
  display: block;
  flex: 0 0 auto;
  width: 18px;
  height: 18px;

  i {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #212121;
  }

  i:nth-child(1) { top: 0; left: 0; }
  i:nth-child(2) { top: 6px; left: 6px; }
  i:nth-child(3) { top: 12px; left: 12px; }
  i:nth-child(4) { top: 0; left: 12px; }
  i:nth-child(5) { top: 12px; left: 0; }
}

.left-triangles,
.left-diagonal,
.left-star {
  position: absolute;
}

.left-triangles {
  top: 85px;
  left: 35px;
  width: 48px;
  height: 36px;
}

.left-diagonal {
  top: 48px;
  left: 216px;
  width: 97px;
  height: 1px;
  transform: rotate(45deg);
  transform-origin: left center;
}

.left-star {
  top: 107px;
  left: 95px;
  width: 14px;
  height: 14px;
}
</style>
