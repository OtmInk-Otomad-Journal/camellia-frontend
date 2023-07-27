import { ref } from 'vue'
import { gsap } from 'gsap'
const data = ref({
  ranking: 4,
  score: 4.147,
  aid: '403625623',
  bvid: 'BV1jV411K7qq',
  title: '♿退り役り♿',
  uploader: '海绵宝宝宇月儿',
  copyright: '1',
  play: '9600',
  like: '1044',
  coin: '619',
  star: '679',
  pubtime: '2023-07-21 21:17:08',
  adjust_scale: '1',
  part: '1',
  duration: 20,
  start_time: 62.9498125,
  full_time: 20,
  video_src: 'H:\\Code\\OtmInk Weekly Camellia\\video\\403625623.mp4',
  avatar_src: 'H:\\Code\\OtmInk Weekly Camellia\\avatar\\403625623.png',
  cover_src: 'H:\\Code\\OtmInk Weekly Camellia\\cover\\403625623.png',
  theme_color: (61, 49, 47)
})
function fun(obj) {
  data.value = {
    ...obj
  }
}

// “全局”变量，既方便函数内调用，也方便外面调用。
let tl_1 = gsap.timeline()
let tl_2 = gsap.timeline()

// 动画 使用css选择器
function repush() {
  //Identifier 'refresh' has already been declared
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
      data.value.full_time
    ),
    tl_1.to(
      '.left',
      {
        duration: 1,
        opacity: 0,
        ease: 'power4.in'
      },
      data.value.full_time
    ),
    tl_1.to(
      '.right',
      {
        duration: 1,
        opacity: 0,
        ease: 'power4.in'
      },
      data.value.full_time
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
function seek_frame(frame, fps, start_time) {
  tl_1.pause()
  tl_2.pause()
  tl_1.seek(frame / fps)
  tl_2.seek(frame / fps)
}
// 全局函数 统一写在这
window['seek_frame'] = (frame, fps, start_time) => {
  seek_frame(frame, fps, start_time)
}
window['inject'] = (obj) => {
  fun(obj)
  repush()
}
export default data
