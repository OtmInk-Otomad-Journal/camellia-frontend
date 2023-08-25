<script setup>
import ExtraSingle from './ExtraSingle.vue'
import StaffBox from './StaffBox.vue'
import Avatar from './Avatar.vue'

defineProps({
  more_data: Array
})
</script>

<template>
  <div class="extra-board">
    <div class="viewlist">
      <div class="start-board">
        <div class="side-end-title">副榜</div>
        <div class="side-end-title-eng">MORE RANKING</div>
      </div>
      <ExtraSingle v-for="i in more_data" :key="i" :data="i" :id="'es' + i.ranking" />
      <div class="end-board">
        <div class="staff-list">
          <div class="staff-single">
            <StaffBox job="策划"><Avatar path="./bd.jpg" />坏枪</StaffBox>
            <StaffBox job="主编团队"
              ><Avatar path="./bd.jpg" />坏枪<br /><Avatar path="./5a.jpg" />ぁぁぁぁぁ</StaffBox
            >
            <StaffBox job="界面设计"
              ><Avatar path="./al.jpg" />艾了个拉<br />
              <Avatar path="./bd.jpg" />坏枪</StaffBox
            >
            <StaffBox job="前端"
              ><Avatar path="./al.jpg" />艾了个拉<br /><Avatar path="./vt.jpg" />昊通机械<br />
              <Avatar path="./bd.jpg" />坏枪 <br
            /></StaffBox>
            <StaffBox job="数据算法"><Avatar path="./yl.jpg" />ErH-弋汐希霅</StaffBox>
          </div>
          <div class="staff-single">
            <StaffBox job="后端"
              ><Avatar path="./yl.jpg" />ErH-弋汐希霅<br />
              <Avatar path="./bd.jpg" />坏枪</StaffBox
            >
            <StaffBox job="片头音乐"><Avatar path="./th.jpg" />thwy</StaffBox>
            <StaffBox job="片头视频"
              ><Avatar path="./tb.jpg" />唐辫小二<br /><Avatar path="./bd.jpg" />坏枪<br /><Avatar
                path="./al.jpg"
              />艾了个拉</StaffBox
            >
            <StaffBox job="数据审核"
              ><Avatar path="./zz.jpg" />zzzzzz9125<br /><Avatar
                path="./tg.jpg"
              />我去是糖狗<br /><Avatar path="./lw.jpg" />隔壁你家一只老王
            </StaffBox>
          </div>
        </div>
        <div class="logo-list">
          <div class="otm-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.43 175">
              <g id="图层_2" data-name="图层 2">
                <path
                  class="cls-1"
                  d="M87.5,150A62.5,62.5,0,1,1,150,87.5h25A87.5,87.5,0,1,0,87.5,175Z"
                />
                <circle class="cls-1" cx="87.5" cy="87.5" r="12.5" />
                <rect class="cls-1" x="107.5" y="100" width="25" height="75" />
                <path
                  class="cls-1"
                  d="M112.5,100v25h20A17.51,17.51,0,0,1,150,142.5V175h25V137.57A37.57,37.57,0,0,0,137.43,100Z"
                />
                <path
                  class="cls-1"
                  d="M99.87,103.2a19.94,19.94,0,0,1-24.74,0,.08.08,0,0,0-.13.06v58.83A12.77,12.77,0,0,0,87.27,175H100V103.26A.08.08,0,0,0,99.87,103.2Z"
                />
                <polygon
                  class="cls-1"
                  points="230.43 175 174.02 118.59 156.34 136.27 195.08 175 230.43 175"
                />
                <polygon
                  class="cls-1"
                  points="188.43 100.23 156.34 132.32 174.02 150 223.79 100.23 188.43 100.23"
                />
                <path
                  class="cls-1"
                  d="M170.63,111,175,106.6V87.5H150v9.4A42.76,42.76,0,0,1,170.63,111Z"
                />
              </g>
            </svg>
          </div>
          <div class="otm-text">音MAD，如墨一般浸润。</div>
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
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 10px; // 最顶端阴影消除
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
  color: #303030;
}
.side-end-title-eng {
  font-size: 1.8rem;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.15em;
  color: #303030;
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
  width: 33%;
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
  font-size: 1.25rem;
  font-weight: 300;
  background-color: transparent;
}
</style>
