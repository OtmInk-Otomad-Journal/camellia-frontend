<script setup>
import { onMounted } from 'vue'
import ExtraSingle from './ExtraSingle.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const props = defineProps({
  more_data: {
    type: Array,
    default: () => {
      return [
        40,
        {
          ranking: 123,
          score: 3.373,
          aid: '616084655',
          bvid: 'BV1wh4y1L7mr',
          title: '-冷吟閑酔-',
          uploader: '芙兰厨陈YuYue',
          copyright: '1',
          pubtime: '2023-07-19 11:32:40',
          adjust_scale: '1',
          part: '1',
          web_prefix: 'http://localhost:7213/',
          avatar_src: './avatar/616084655.png',
          cover_src: './cover/616084655.png',
          theme_brightness: 'light'
        },
        {
          ranking: 4213,
          score: 32273,
          aid: '616084655',
          bvid: 'BV1wh4y1L7mr',
          title: '-冷吟閑酔-',
          uploader: '芙兰厨陈YuYue',
          copyright: '1',
          pubtime: '2023-07-19 11:32:40',
          adjust_scale: '1',
          part: '1',
          web_prefix: 'http://localhost:7213/',
          avatar_src: './avatar/616084655.png',
          cover_src: './cover/616084655.png',
          theme_brightness: 'light'
        },
        {
          ranking: 11,
          score: 3.373,
          aid: '616084655',
          bvid: 'BV1wh4y1L7mr',
          title: '-冷吟閑酔-',
          uploader: '芙兰厨陈YuYue',
          copyright: '1',
          pubtime: '2023-07-19 11:32:40',
          adjust_scale: '1',
          part: '1',
          web_prefix: 'http://localhost:7213/',
          avatar_src: './avatar/616084655.png',
          cover_src: './cover/616084655.png',
          theme_brightness: 'light'
        }
      ]
    }
  }
})
let tl_1 = gsap.timeline()
onMounted(() => {
  console.log('extra start')
  tl_1.fromTo(
    '.extra-board',
    {
      opacity: 0
    },
    {
      delay: 20,
      duration: 2.5,
      opacity: 1
    }
  )
  tl_1.to('.viewlist', {
    duration: props.more_data[0],
    scrollTo: { y: 'max' }
  })
})
</script>

<template>
  <div class="extra-board">
    <div class="leftI">
      <div class="viewlist">
        <ExtraSingle v-for="i in 40" :key="i" :data="props.more_data[i]" :id="'es' + i" />
      </div>
    </div>
    <div class="rightI"></div>
    <video class="back-video"></video>
  </div>
</template>

<style lang="scss" scoped>
.viewlist {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.extra-board {
  aspect-ratio: 16 / 9;
  display: flex;
  gap: 2rem;
  padding: 3.5rem 5rem;
  background-size: 100vw;
  background-position: center;
}

.leftI {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
}

.rightI {
  width: 500px;
  flex-shrink: 0;
}
.back-video {
  position: absolute;
  z-index: -10;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  transform: scale(1.5);
  filter: blur(100px);
}
</style>
