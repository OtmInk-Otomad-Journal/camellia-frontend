import { ref } from 'vue'
// 初始化
const data = ref({
  score: 2.778,
  aid: '658462099',
  bvid: 'BV1Wh4y1f7Z9',
  title: '胡桃',
  uploader: '豪快Z',
  copyright: '2',
  play: '1591',
  like: '148',
  coin: '11',
  star: '134',
  pubtime: '2023-07-15 19:58:57',
  adjust_scale: '1',
  part: '1',
  duration: 20,
  start_time: 91.5498125,
  full_time: 20,
  web_prefix: 'http://localhost:7213/',
  video_src: './video/658462099.mp4',
  avatar_src: './avatar/658462099.png',
  cover_src: './cover/658462099.png',
  theme_color: '(53, 52, 53)',
  theme_brightness: 'dark',
  ranking: 17,
  side_duration: 10,
  reason: '这个作品真的太好了！我从来没有见到过这么好的作品。\n你敢想象吗？太棒了！',
  picker: '神秘人'
  // more_data: [
  //   {
  //     score: 2.967,
  //     aid: '828743814',
  //     bvid: 'BV1Fu4y1U74D',
  //     title: '【东方电气棍】Otto-Fantasia',
  //     uploader: 'XhoI_Enzyme',
  //     copyright: '1',
  //     play: '3674',
  //     like: '728',
  //     coin: '147',
  //     star: '298',
  //     pubtime: '2023-07-21 23:13:34',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 87.9248125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/828743814.mp4',
  //     avatar_src: './avatar/828743814.png',
  //     cover_src: './cover/828743814.png',
  //     theme_color: '(192, 132, 134)',
  //     theme_brightness: 'light',
  //     ranking: 16
  //   },
  //   {
  //     score: 2.778,
  //     aid: '658462099',
  //     bvid: 'BV1Wh4y1f7Z9',
  //     title: '胡桃',
  //     uploader: '豪快Z',
  //     copyright: '2',
  //     play: '1591',
  //     like: '148',
  //     coin: '11',
  //     star: '134',
  //     pubtime: '2023-07-15 19:58:57',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 91.5498125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/658462099.mp4',
  //     avatar_src: './avatar/658462099.png',
  //     cover_src: './cover/658462099.png',
  //     theme_color: '(53, 52, 53)',
  //     theme_brightness: 'dark',
  //     ranking: 17
  //   },
  //   {
  //     score: 2.71,
  //     aid: '743560411',
  //     bvid: 'BV1Kk4y157FM',
  //     title: '世界依旧运转',
  //     uploader: '榆木华',
  //     copyright: '1',
  //     play: '2863',
  //     like: '663',
  //     coin: '113',
  //     star: '149',
  //     pubtime: '2023-07-17 16:31:15',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 45.8791565,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/743560411.mp4',
  //     avatar_src: './avatar/743560411.png',
  //     cover_src: './cover/743560411.png',
  //     theme_color: '(1, 2, 0)',
  //     theme_brightness: 'dark',
  //     ranking: 18
  //   },
  //   {
  //     score: 2.706,
  //     aid: '998487323',
  //     bvid: 'BV1ux4y1Z7Ah',
  //     title: '木吉落枕了。',
  //     uploader: '熟茄',
  //     copyright: '1',
  //     play: '1843',
  //     like: '311',
  //     coin: '62',
  //     star: '166',
  //     pubtime: '2023-07-16 09:44:27',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 4.999625000000002,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/998487323.mp4',
  //     avatar_src: './avatar/998487323.png',
  //     cover_src: './cover/998487323.png',
  //     theme_color: '(241, 236, 229)',
  //     theme_brightness: 'light',
  //     ranking: 19
  //   },
  //   {
  //     score: 2.686,
  //     aid: '231090115',
  //     bvid: 'BV1L8411S7UK',
  //     title: '【合作】Rape Inmu &amp; Marina',
  //     uploader: 'FRN姉貴',
  //     copyright: '2',
  //     play: '6210',
  //     like: '668',
  //     coin: '83',
  //     star: '631',
  //     pubtime: '2023-07-18 03:05:14',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 175.033156,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/231090115.mp4',
  //     avatar_src: './avatar/231090115.png',
  //     cover_src: './cover/231090115.png',
  //     theme_color: '(250, 214, 12)',
  //     theme_brightness: 'light',
  //     ranking: 20
  //   },
  //   {
  //     score: 2.684,
  //     aid: '658580158',
  //     bvid: 'BV11h4y117u3',
  //     title: '[音mad] 05',
  //     uploader: '五边形球体P',
  //     copyright: '1',
  //     play: '958',
  //     like: '125',
  //     coin: '33',
  //     star: '83',
  //     pubtime: '2023-07-18 15:38:24',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: '未取得',
  //     start_time: '未取得',
  //     full_time: '未取得',
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: '未取得',
  //     avatar_src: './avatar/658580158.png',
  //     cover_src: './cover/658580158.png',
  //     theme_color: '(225, 219, 210)',
  //     theme_brightness: 'light',
  //     ranking: 21
  //   }
  // ]
})
function fun(obj) {
  data.value = {
    ...obj
  }
  data.value.theme_color = 'rgb' + data.value.theme_color
  data.value.video_src = data.value.web_prefix + data.value.video_src
  data.value.avatar_src = data.value.web_prefix + data.value.avatar_src
  data.value.cover_src = data.value.web_prefix + data.value.cover_src
  if (data.value.more_data) {
    data.value.more_data.forEach((element) => {
      element.theme_color = 'rgb' + element.theme_color
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
