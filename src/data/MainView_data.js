import { ref } from 'vue'
// 初始化
const data = ref({
  score: '3.161',
  aid: '488745602',
  bvid: 'BV1pN411e79c',
  title:
    '⼊入⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖',
  uploader: '佐仓镜泽',
  copyright: '1',
  play: '18345',
  like: '1465',
  coin: '454',
  star: '486',
  pubtime: '2023-07-19 22:35:00',
  adjust_scale: '1',
  part: '1',
  duration: 20,
  start_time: 108.7501565,
  full_time: 20,
  web_prefix: '',
  video_src: './test.mp4',
  avatar_src: './5a.jpg',
  cover_src: './5a.jpg',
  danmaku_src: 'http://localhost:7213/danmaku/1164072214.xml',
  light_color: '(321.1764705882353,41.463414634146346%,75%)',
  dark_color: '(321.1764705882353,41.463414634146346%,30%)',
  //更适合本地宝宝品质的测试
  reason:
    '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
  ranking: 15
})
function fun(obj) {
  data.value = {
    ...obj
  }
  data.value.light_color = 'hsl' + data.value.light_color
  data.value.dark_color = 'hsl' + data.value.dark_color
  data.value.video_src = data.value.web_prefix + data.value.video_src
  data.value.avatar_src = data.value.web_prefix + data.value.avatar_src
  data.value.cover_src = data.value.web_prefix + data.value.cover_src
  data.value.danmaku_src = data.value.web_prefix + data.value.danmaku_src
  if (data.value.more_data) {
    data.value.more_data.forEach((element) => {
      element.light_color = 'hsl' + element.light_color
      element.dark_color = 'hsl' + element.dark_color
      element.video_src = element.web_prefix + element.video_src
      element.avatar_src = element.web_prefix + element.avatar_src
      element.cover_src = element.web_prefix + element.cover_src
    })
  }
  return new Promise((resolve) => {
    resolve()
  })
}

export { data, fun }
