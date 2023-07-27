import { ref } from 'vue'
import { gsap } from 'gsap'
import { seek_frame } from './utils'
const data = ref({
  ranking: 42,
  score: 2.863,
  aid: 28123491,
  bvid: 'BHSNyu244',
  title: '【东方滑灯宴】合作单品',
  uploader: '坏枪',
  copyright: '1',
  play: 10103,
  like: 21293,
  coin: 212,
  star: 2134,
  pubtime: '2023/04/04 23:48:37',
  adjust_scale: 1,
  part: 1,
  full_time: 20,
  sep_time: 20,
  start_time: 10,
  end_time: 30,
  video_src: '/video/12345.mp4',
  web_video_src: 'http://localhost:7213/video/34567.mp4',
  cover_src: 'http://localhost:7213/cover/12345.png'
})
function fun(obj) {
  data.value = {
    ...obj
  }
}
// 动画 使用css选择器
function repush() {
  //Identifier 'refresh' has already been declared
  let tl_1 = gsap.timeline()
  let tl_2 = gsap.timeline()
  tl_1.from('.video-box', {
    duration: 1,
    rotationX: 90,
    ease: 'back.out(2)'
  }),
    tl_1.to(
      '.video-box',
      {
        duration: 1,
        rotationX: 90,
        ease: 'power4.in'
      },
      data.value.sep_time
    ),
    tl_1.to(
      '.left',
      {
        duration: 1,
        opacity: 0,
        ease: 'power4.in'
      },
      data.value.sep_time
    ),
    tl_1.to(
      '.right',
      {
        duration: 1,
        opacity: 0,
        ease: 'power4.in'
      },
      data.value.sep_time
    ),
    tl_2.from(
      '.main-info',
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.main-rank',
      {
        duration: 0.8,
        x: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.main-counts',
      {
        duration: 0.8,
        x: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.count-item',
      {
        duration: 0.8,
        x: 50,
        opacity: 0,
        stagger: 0.08,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.cover',
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.chip',
      {
        duration: 0.8,
        delay: 0.2,
        stagger: 0.08,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.uploader',
      {
        duration: 0.8,
        delay: 0.4,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.main-title',
      {
        duration: 0.8,
        delay: 0.4,
        stagger: 0.08,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    ),
    tl_2.from(
      '.count',
      {
        duration: 0.8,
        delay: 0.2,
        stagger: 0.08,
        y: 50,
        opacity: 0,
        ease: 'expo.out'
      },
      0
    )
  //seek_frame(20, 60, 10)
}
// 全局函数 统一写在这
window['seek_frame'] = (frame, fps, start_time) => {
  return seek_frame(frame, fps, start_time)
}
window['inject'] = (obj) => {
  repush()
  return fun(obj)
}
export default data
