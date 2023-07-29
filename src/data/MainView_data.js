import { ref } from 'vue'
// 初始化
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
  video_src: 'http://localhost:7213\\video\\403625623.mp4',
  avatar_src: 'http://localhost:7213\\avatar\\403625623.png',
  cover_src: 'http://localhost:7213\\cover\\403625623.png',
  theme_color: '(61, 49, 47)'
})
function fun(obj) {
  data.value = {
    ...obj
  }
  data.value.theme_color = String('rgb' + data.value.theme_color)
}

export { data, fun }
