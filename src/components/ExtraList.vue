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
            <StaffBox job="现任主编">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </template>
              <Avatar path="./zz.jpg" />zzzzzz9125
            </StaffBox>

            <StaffBox job="原策划">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </template>
              <Avatar path="./bd.jpg" />坏枪
            </StaffBox>

            <StaffBox job="界面设计">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="28px"
                  viewBox="0 0 24 24" width="28px" fill="currentColor">
                  <path
                    d="M16.24,11.51l1.57-1.57l-3.75-3.75l-1.57,1.57L8.35,3.63c-0.78-0.78-2.05-0.78-2.83,0l-1.9,1.9 c-0.78,0.78-0.78,2.05,0,2.83l4.13,4.13L3,17.25V21h3.75l4.76-4.76l4.13,4.13c0.95,0.95,2.23,0.6,2.83,0l1.9-1.9 c0.78-0.78,0.78-2.05,0-2.83L16.24,11.51z M9.18,11.07L5.04,6.94l1.89-1.9c0,0,0,0,0,0l1.27,1.27L7.02,7.5l1.41,1.41l1.19-1.19 l1.45,1.45L9.18,11.07z M17.06,18.96l-4.13-4.13l1.9-1.9l1.45,1.45l-1.19,1.19l1.41,1.41l1.19-1.19l1.27,1.27L17.06,18.96z" />
                  <path
                    d="M20.71,7.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34c-0.47-0.47-1.12-0.29-1.41,0l-1.83,1.83l3.75,3.75L20.71,7.04z" />
                </svg>
              </template>
              <Avatar path="./al.png" />艾了个拉<br />
              <Avatar path="./bd.jpg" />坏枪
            </StaffBox>

            <StaffBox job="数据算法">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" />
                </svg>
              </template>
              <Avatar path="./yl.jpg" />ErH_杋糖
            </StaffBox>

            <StaffBox job="后端">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="28px"
                  viewBox="0 0 24 24" width="28px" fill="currentColor">
                  <path
                    d="M4,7v2c0,0.55-0.45,1-1,1H2v4h1c0.55,0,1,0.45,1,1v2c0,1.65,1.35,3,3,3h3v-2H7c-0.55,0-1-0.45-1-1v-2 c0-1.3-0.84-2.42-2-2.83v-0.34C5.16,11.42,6,10.3,6,9V7c0-0.55,0.45-1,1-1h3V4H7C5.35,4,4,5.35,4,7z" />
                  <path
                    d="M21,10c-0.55,0-1-0.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c0.55,0,1,0.45,1,1v2c0,1.3,0.84,2.42,2,2.83v0.34 c-1.16,0.41-2,1.52-2,2.83v2c0,0.55-0.45,1-1,1h-3v2h3c1.65,0,3-1.35,3-3v-2c0-0.55,0.45-1,1-1h1v-4H21z" />
                </svg>
              </template>
              <Avatar path="./yl.jpg" />ErH_杋糖<br />
              <Avatar path="./bd.jpg" />坏枪
            </StaffBox>
          </div>

          <div class="staff-single">
            <StaffBox job="前端">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path
                    d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </template>
              <Avatar path="./al.png" />艾了个拉<br />
              <Avatar path="./vt.jpg" />昊通机械<br />
              <Avatar path="./bd.jpg" />坏枪 <br />
            </StaffBox>

            <StaffBox job="封面团队">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path
                    d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </template>
              <Avatar path="./aw.jpg" />阿我饿一屋雨<br />
              <Avatar path="./xk.jpg" />小刊啦<br />
              <Avatar path="./st.jpg" />STARDO<br />
              <Avatar path="./ptsm.jpg" />普通市民B<br />
              <Avatar path="./nc.jpg" />Nucleus
            </StaffBox>

            <StaffBox job="片头音乐">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </template>
              <Avatar path="./th.jpg" />thwy
            </StaffBox>

            <StaffBox job="运行维护">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path
                    d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </template>
              <Avatar path="./bd.jpg" />坏枪<br />
              <Avatar path="./xb.jpg" />信标之光<br />
            </StaffBox>
          </div>
          <div class="staff-single">
            <StaffBox job="片头视频">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path
                    d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                </svg>
              </template>
              <Avatar path="./tb.jpg" />唐辫小二<br />
              <Avatar path="./bd.jpg" />坏枪<br />
              <Avatar path="./al.png" />艾了个拉
            </StaffBox>

            <StaffBox job="数据审核">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px"
                  fill="currentColor">
                  <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </template>
              <Avatar path="./zz.jpg" />zzzzzz9125<br />
              <Avatar path="./lw.jpg" />隔壁你家一只老王<br />
              <Avatar path="./xk.jpg" />小刊啦<br />
              <Avatar path="./qsh.jpg" />秦始皇派蒙
            </StaffBox>

            <StaffBox job="引擎支持">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="28px"
                  viewBox="0 0 24 24" width="28px" fill="currentColor">
                  <path d="M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z" />
                  <path d="M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z" />
                  <path
                    d="M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z" />
                </svg>
              </template>
              WebVideoCreator<am>by Vinlic</am><br />
            </StaffBox>
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
  width: 0; // Safari,Chrome 隐藏滚动条
  height: 0; // Safari,Chrome 隐藏滚动条
  display: none; // 移动端、pad 上Safari，Chrome，隐藏滚动条
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
  gap: 20px;
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
