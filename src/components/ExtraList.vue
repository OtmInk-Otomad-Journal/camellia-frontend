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
            <StaffBox job="现任主编"><Avatar path="./zz.jpg" />zzzzzz9125</StaffBox>
            <StaffBox job="原策划"><Avatar path="./bd.jpg" />坏枪</StaffBox>
            <StaffBox job="界面设计"
              ><Avatar path="./al.png" />艾了个拉<br />
              <Avatar path="./bd.jpg" />坏枪</StaffBox
            >
            <StaffBox job="数据算法"><Avatar path="./yl.jpg" />ErH_杋糖</StaffBox>
            <StaffBox job="后端"
              ><Avatar path="./yl.jpg" />ErH_杋糖<br />
              <Avatar path="./bd.jpg" />坏枪</StaffBox
            >
          </div>
          <div class="staff-single">
            <StaffBox job="前端"
              ><Avatar path="./al.png" />艾了个拉<br /><Avatar path="./vt.jpg" />昊通机械<br />
              <Avatar path="./bd.jpg" />坏枪 <br
            /></StaffBox>
            <StaffBox job="封面团队"
              ><Avatar path="./aw.jpg" />阿我饿一屋雨<br /><Avatar
                path="./xk.jpg"
              />小刊啦<br /><Avatar path="./st.jpg" />STARDO<br /><Avatar
                path="./ptsm.jpg"
              />普通市民B<br /><Avatar path="./nc.jpg" />Nucleus</StaffBox
            >
            <StaffBox job="片头音乐"><Avatar path="./th.jpg" />thwy</StaffBox>
            <StaffBox job="运行维护"
              ><Avatar path="./al.png" />艾了个拉<br />
              <Avatar path="./bd.jpg" />坏枪<br /><Avatar path="./xb.jpg" />信标之光<br
            /></StaffBox>
          </div>
          <div class="staff-single">
            <StaffBox job="片头视频"
              ><Avatar path="./tb.jpg" />唐辫小二<br /><Avatar path="./bd.jpg" />坏枪<br /><Avatar
                path="./al.png"
              />艾了个拉</StaffBox
            >
            <StaffBox job="数据审核"
              ><Avatar path="./zz.jpg" />zzzzzz9125<br /><Avatar
                path="./lw.jpg"
              />隔壁你家一只老王<br /><Avatar path="./xk.jpg" />小刊啦<br /><Avatar
                path="./qsh.jpg"
              />秦始皇派蒙
            </StaffBox>
            <StaffBox job="引擎支持">WebVideoCreator<am>by Vinlic</am><br /></StaffBox>
          </div>
        </div>
        <div class="logo-list">
          <div class="otm-logo">
            <img class="yzm" src="../assets/yzm.png" />
          </div>
          <!-- <div class="otm-text"></div> -->
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
  margin-top: 20px; // 最顶端阴影消除
}
.staff-list {
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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
  width: 100%;
  display: flex;
  justify-content: center;
  filter: drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.18));
}

.otm-text {
  margin-top: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
  background-color: transparent;
}

am {
  font-size: 1.2rem;
  margin-top: -0.8rem;
  display: block;
  text-align: right;
}

@keyframes yzm-ani {
  from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
}

.yzm {
  width: 100%;
  animation: yzm-ani ease-in-out 1s infinite alternate;
}
</style>
