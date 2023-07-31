import { ref } from 'vue'
// 初始化
const data = {
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
  theme_brightness: 'light',
  ranking: 11
}
const datas = ref([data, data, data, data])
datas.value.forEach((ele) => {
  ele.theme_color = String('rgb' + ele.theme_color)
  ele.video_src = String(ele.web_prefix + ele.video_src)
})
//

export default datas
