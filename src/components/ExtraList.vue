<script setup>
import { onMounted } from 'vue'
import ExtraSingle from './ExtraSingle.vue'
import { data } from '../data/MainView_data'
import StaffBox from './StaffBox.vue'

const props = defineProps({
  more_data: Array
})
</script>

<template>
  <div class="extra-board">
    <div class="viewlist">
      <div class="start-board" :class="data.theme_brightness">
        <div class="side-end-title">副榜</div>
        <div class="side-end-title-eng">MORE RANKING</div>
      </div>
      <ExtraSingle v-for="i in more_data" :key="i" :data="i" :id="'es' + i.ranking" />
      <div class="end-board">
        <div class="staff-list">
          <div class="staff-single">
            <StaffBox job="策划">坏枪</StaffBox>
            <StaffBox job="主编团队">坏枪<br />ぁぁぁぁぁ</StaffBox>
            <StaffBox job="界面设计">艾了个拉<br />坏枪</StaffBox>
            <StaffBox job="前端架构">昊通机械<br />坏枪</StaffBox>
            <StaffBox job="数据算法">ErH-弋汐希霅</StaffBox>
          </div>
          <div class="staff-single">
            <StaffBox job="后端架构">ErH-弋汐希霅<br />坏枪</StaffBox>
            <StaffBox job="片头音乐">thwy</StaffBox>
            <StaffBox job="片头制作">唐辫小二</StaffBox>
            <StaffBox job="数据审核">zzzzzz9125<br />我去是糖狗<br />隔壁你家一只老王 </StaffBox>
          </div>
        </div>
        <div class="logo-list">
          <img class="otm-logo" src="../assets/logo.svg" />
          <div class="otm-text" :class="data.theme_brightness">音MAD，像墨一样沁润。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.viewlist {
  width: 100%;
  height: 100%;
  padding: 0 10em;
  overflow-y: scroll;
}
.extra-board {
  width: 100%;
  height: 100%;
}

::-webkit-scrollbar {
  width: 0; /* Safari,Chrome 隐藏滚动条 */
  height: 0; /* Safari,Chrome 隐藏滚动条 */
  display: none; /* 移动端、pad 上Safari，Chrome，隐藏滚动条 */
}

.start-board {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
}

.side-end-title {
  font-size: 6rem;
  font-weight: bold;
}
.side-end-title-eng {
  font-size: 1.8rem;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.15em;
}

.end-board {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.staff-list {
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.staff-single {
  display: flex;
  margin-left: 3em;
  flex-direction: column;
  align-items: flex-start;
}

.logo-list {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.otm-logo {
  width: 50%;
  filter: drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.18));
}

.otm-text {
  margin-top: 2rem;
  font-size: 1.5rem;
  background-color: transparent;
}
</style>
