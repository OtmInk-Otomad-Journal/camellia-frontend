import { ref } from 'vue'
// 初始化
const data = ref({
  score: 3.373,
  aid: '616084655',
  bvid: 'BV1wh4y1L7mr',
  title: '-冷吟閑酔-',
  uploader: '芙兰厨陈YuYue',
  copyright: '1',
  play: '1898',
  like: '573',
  coin: '50',
  star: '194',
  pubtime: '2023-07-19 11:32:40',
  adjust_scale: '1',
  part: '1',
  duration: 20,
  start_time: 56.9831565,
  full_time: 20,
  web_prefix: 'http://localhost:7213/',
  video_src: './video/616084655.mp4',
  avatar_src: './avatar/616084655.png',
  cover_src: './cover/616084655.png',
  theme_color: '(244, 240, 238)',
  theme_brightness: 'light',
  ranking: 1,
  more_data: [
    60,
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
      score: 373,
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
})
function fun(obj) {
  data.value = {
    ...obj
  }
  data.value.theme_color = String('rgb' + data.value.theme_color)
  data.value.video_src = String(data.value.web_prefix + data.value.video_src)
  data.value.avatar_src = String(data.value.web_prefix + data.value.avatar_src)
  data.value.cover_src = String(data.value.web_prefix + data.value.cover_src)
}

export { data, fun }
