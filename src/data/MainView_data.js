import { ref } from 'vue'
// 初始化
const data = ref({
  score: '123',
  aid: '488745602',
  bvid: 'BV1pN411e79c',
  title: '希望与梦想的鸡牛马人狗猪比吧哈陛下哈里路大旋风啊啊啊啊啊啊',
  uploader: 'UNCHECKABLE',
  copyright: '1',
  play: '18345',
  like: '1465',
  coin: '454',
  star: '486',
  pubtime: '2023-07-19 22:35:00',
  adjust_scale: '1',
  part: '1',
  duration: 20,
  side_duration: 10,
  start_time: 108.7501565,
  full_time: 20,
  web_prefix: 'http://localhost:7213/',
  video_src: './video/922953753.mp4',
  avatar_src: './avatar/922953753.png',
  cover_src: './cover/922953753.png',
  light_color: '(321.1764705882353,41.463414634146346%,75%)',
  dark_color: '(321.1764705882353,41.463414634146346%,30%)',
  activity: 'wc',
  reason:
    '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
  ranking: 15
  // score_add: '合作单品 + 10%',
  // more_data: [
  //   {
  //     score: '5.439',
  //     aid: '531149163',
  //     bvid: 'BV1Hu411V7ah',
  //     title: '为什么你搜到的视频都是又柴又老？原来是这一步搞错了',
  //     uploader: '终极仏飛',
  //     copyright: '1',
  //     play: '9309',
  //     like: '907',
  //     coin: '264',
  //     star: '467',
  //     pubtime: '2023-07-19 21:06:35',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 70,
  //     start_time: 72.100313,
  //     full_time: 70,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/531149163.mp4',
  //     avatar_src: './avatar/531149163.png',
  //     cover_src: './cover/531149163.png',
  //     light_color: '(16.708860759493668,47.878787878787875%,75%)',
  //     dark_color: '(16.708860759493668,47.878787878787875%,45%)',
  //     ranking: 1
  //   },
  //   {
  //     score: '5.437',
  //     aid: '358431264',
  //     bvid: 'BV1dX4y1a76B',
  //     title: '信仰与稿件都消失不见',
  //     uploader: '阴暗处的水晶',
  //     copyright: '1',
  //     play: '4388',
  //     like: '651',
  //     coin: '183',
  //     star: '449',
  //     pubtime: '2023-07-16 14:39:26',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 91.4918125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/358431264.mp4',
  //     avatar_src: './avatar/358431264.png',
  //     cover_src: './cover/358431264.png',
  //     light_color: '(350.52631578947376,23.456790123456777%,75%)',
  //     dark_color: '(350.52631578947376,23.456790123456777%,45%)',
  //     ranking: 2
  //   },
  //   {
  //     score: '4.8',
  //     aid: '658559133',
  //     bvid: 'BV1bh4y117u1',
  //     title: "【教祖诞生祭'23】ぼくらはみんな意味不明",
  //     uploader: 'zzx_XUAN',
  //     copyright: '1',
  //     play: '3951',
  //     like: '783',
  //     coin: '275',
  //     star: '429',
  //     pubtime: '2023-07-20 00:00:00',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 66.9831565,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/658559133.mp4',
  //     avatar_src: './avatar/658559133.png',
  //     cover_src: './cover/658559133.png',
  //     light_color: '(355.7142857142857,23.33333333333334%,75%)',
  //     dark_color: '(355.7142857142857,23.33333333333334%,45%)',
  //     ranking: 3
  //   },
  //   {
  //     score: '4.147',
  //     aid: '403625623',
  //     bvid: 'BV1jV411K7qq',
  //     title: '♿退り役り♿',
  //     uploader: '海绵宝宝宇月儿',
  //     copyright: '1',
  //     play: '9600',
  //     like: '1044',
  //     coin: '619',
  //     star: '679',
  //     pubtime: '2023-07-21 21:17:08',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 62.9498125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/403625623.mp4',
  //     avatar_src: './avatar/403625623.png',
  //     cover_src: './cover/403625623.png',
  //     light_color: '(8.571428571428575,12.962962962962962%,75%)',
  //     dark_color: '(8.571428571428575,12.962962962962962%,45%)',
  //     ranking: 4
  //   },
  //   {
  //     score: '3.961',
  //     aid: '273390871',
  //     bvid: 'BV1BF41197g9',
  //     title: '风り风り',
  //     uploader: '坏枪',
  //     copyright: '1',
  //     play: '36883',
  //     like: '5802',
  //     coin: '655',
  //     star: '1967',
  //     pubtime: '2023-07-16 15:38:10',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 54.9333125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/273390871.mp4',
  //     avatar_src: './avatar/273390871.png',
  //     cover_src: './cover/273390871.png',
  //     light_color: '(0.0,11.926605504587158%,75%)',
  //     dark_color: '(0.0,11.926605504587158%,45%)',
  //     ranking: 5
  //   },
  //   {
  //     score: '3.789',
  //     aid: '361093456',
  //     bvid: 'BV1294y1i7iD',
  //     title: 'Takeya Maximizer',
  //     uploader: 'XBLQM',
  //     copyright: '1',
  //     play: '2130',
  //     like: '312',
  //     coin: '106',
  //     star: '197',
  //     pubtime: '2023-07-17 18:18:22',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 45.6498125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/361093456.mp4',
  //     avatar_src: './avatar/361093456.png',
  //     cover_src: './cover/361093456.png',
  //     light_color: '(251.99999999999994,41.66666666666659%,75%)',
  //     dark_color: '(251.99999999999994,41.66666666666659%,45%)',
  //     ranking: 6
  //   },
  //   {
  //     score: '3.557',
  //     aid: '743584016',
  //     bvid: 'BV1Wk4y157bW',
  //     title: ' 顺藤摸瓜合作',
  //     uploader: 'Tojirra',
  //     copyright: '1',
  //     play: '2852',
  //     like: '329',
  //     coin: '195',
  //     star: '332',
  //     pubtime: '2023-07-16 21:15:00',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 355.5833125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/743584016.mp4',
  //     avatar_src: './avatar/743584016.png',
  //     cover_src: './cover/743584016.png',
  //     light_color: '(339.99999999999994,51.72413793103448%,75%)',
  //     dark_color: '(339.99999999999994,51.72413793103448%,45%)',
  //     ranking: 7
  //   },
  //   {
  //     score: '3.531',
  //     aid: '273559420',
  //     bvid: 'BV1UF411Q7WN',
  //     title: '道化師協奏会 ～Concert of McDonald～',
  //     uploader: 'yumeki335',
  //     copyright: '1',
  //     play: '3883',
  //     like: '738',
  //     coin: '370',
  //     star: '573',
  //     pubtime: '2023-07-19 23:30:00',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 387.0333125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/273559420.mp4',
  //     avatar_src: './avatar/273559420.png',
  //     cover_src: './cover/273559420.png',
  //     light_color: '(8.124999999999998,85.71428571428571%,75%)',
  //     dark_color: '(8.124999999999998,85.71428571428571%,45%)',
  //     ranking: 8
  //   },
  //   {
  //     score: '3.409',
  //     aid: '361139166',
  //     bvid: 'BV1g94y1q7Qu',
  //     title: 'Soka Dancer',
  //     uploader: 'NIWANGO公司',
  //     copyright: '1',
  //     play: '1942',
  //     like: '242',
  //     coin: '108',
  //     star: '144',
  //     pubtime: '2023-07-19 20:25:21',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 90.5833125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/361139166.mp4',
  //     avatar_src: './avatar/361139166.png',
  //     cover_src: './cover/361139166.png',
  //     light_color: '(337.5,14.285714285714285%,75%)',
  //     dark_color: '(337.5,14.285714285714285%,45%)',
  //     ranking: 9
  //   },
  //   {
  //     score: '3.396',
  //     aid: '530952230',
  //     bvid: 'BV1wu411L79N',
  //     title: '【铁道音MAD】强风京包客专【強風オールバック × 京包高速铁路】',
  //     uploader: '北山田キタヤマタ',
  //     copyright: '1',
  //     play: '20477',
  //     like: '2112',
  //     coin: '419',
  //     star: '1173',
  //     pubtime: '2023-07-16 17:16:14',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 37.8168125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/530952230.mp4',
  //     avatar_src: './avatar/530952230.png',
  //     cover_src: './cover/530952230.png',
  //     light_color: '(46.086956521739125,63.88888888888887%,75%)',
  //     dark_color: '(46.086956521739125,63.88888888888887%,45%)',
  //     ranking: 10
  //   },
  //   {
  //     score: '3.373',
  //     aid: '616084655',
  //     bvid: 'BV1wh4y1L7mr',
  //     title: '-冷吟閑酔-',
  //     uploader: '芙兰厨陈YuYue',
  //     copyright: '1',
  //     play: '1898',
  //     like: '573',
  //     coin: '50',
  //     star: '194',
  //     pubtime: '2023-07-19 11:32:40',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 56.9831565,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/616084655.mp4',
  //     avatar_src: './avatar/616084655.png',
  //     cover_src: './cover/616084655.png',
  //     light_color: '(19.999999999999908,21.428571428571445%,75%)',
  //     dark_color: '(19.999999999999908,21.428571428571445%,45%)',
  //     ranking: 11
  //   },
  //   {
  //     score: '3.275',
  //     aid: '743592728',
  //     bvid: 'BV1jk4y157JH',
  //     title: 'Virtual Insanity...',
  //     uploader: '碎 夢',
  //     copyright: '1',
  //     play: '6829',
  //     like: '591',
  //     coin: '135',
  //     star: '290',
  //     pubtime: '2023-07-17 19:13:27',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 50.36,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/743592728.mp4',
  //     avatar_src: './avatar/743592728.png',
  //     cover_src: './cover/743592728.png',
  //     light_color: '(212.30769230769235,10.569105691056906%,75%)',
  //     dark_color: '(212.30769230769235,10.569105691056906%,45%)',
  //     ranking: 12
  //   },
  //   {
  //     score: '3.23',
  //     aid: '828722036',
  //     bvid: 'BV1ku4y1m7A8',
  //     title: '【合作单品】phony phony 的精神回归',
  //     uploader: 'thwy',
  //     copyright: '1',
  //     play: '2578',
  //     like: '487',
  //     coin: '179',
  //     star: '271',
  //     pubtime: '2023-07-20 16:10:00',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 0,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/828722036.mp4',
  //     avatar_src: './avatar/828722036.png',
  //     cover_src: './cover/828722036.png',
  //     light_color: '(256.47058823529414,35.66433566433566%,75%)',
  //     dark_color: '(256.47058823529414,35.66433566433566%,45%)',
  //     ranking: 13
  //   },
  //   {
  //     score: '3.227',
  //     aid: '488668323',
  //     bvid: 'BV1UN411Y7eE',
  //     title: 'Misaokaster B-Boy',
  //     uploader: '豪快Z',
  //     copyright: '2',
  //     play: '21010',
  //     like: '3588',
  //     coin: '460',
  //     star: '1973',
  //     pubtime: '2023-07-20 20:35:54',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 30.1668125,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/488668323.mp4',
  //     avatar_src: './avatar/488668323.png',
  //     cover_src: './cover/488668323.png',
  //     light_color: '(47.49999999999997,54.5454545454546%,75%)',
  //     dark_color: '(47.49999999999997,54.5454545454546%,45%)',
  //     ranking: 14
  //   },
  //   {
  //     score: '3.161',
  //     aid: '488745602',
  //     bvid: 'BV1pN411e79c',
  //     title: '【地铁（？）音mad】长春轻轨这么可爱真是抱歉',
  //     uploader: '佐仓镜泽',
  //     copyright: '1',
  //     play: '18345',
  //     like: '1465',
  //     coin: '454',
  //     star: '486',
  //     pubtime: '2023-07-19 22:35:00',
  //     adjust_scale: '1',
  //     part: '1',
  //     duration: 20,
  //     start_time: 108.7501565,
  //     full_time: 20,
  //     web_prefix: 'http://localhost:7213/',
  //     video_src: './video/488745602.mp4',
  //     avatar_src: './avatar/488745602.png',
  //     cover_src: './cover/488745602.png',
  //     light_color: '(328.8461538461538,21.311475409836067%,75%)',
  //     dark_color: '(328.8461538461538,21.311475409836067%,45%)',
  //     ranking: 15
  //   },
  //   {
  //     score: '2.967',
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
  //     light_color: '(358.0,32.25806451612902%,75%)',
  //     dark_color: '(358.0,32.25806451612902%,45%)',
  //     ranking: 16
  //   },
  //   {
  //     score: '2.778',
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
  //     light_color: '(26.666666666666586,12.328767123287673%,75%)',
  //     dark_color: '(26.666666666666586,12.328767123287673%,45%)',
  //     ranking: 17
  //   },
  //   {
  //     score: '2.71',
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
  //     light_color: '(90.0,100.0%,75%)',
  //     dark_color: '(90.0,100.0%,45%)',
  //     ranking: 18
  //   },
  //   {
  //     score: '2.706',
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
  //     light_color: '(35.000000000000064,29.99999999999999%,75%)',
  //     dark_color: '(35.000000000000064,29.99999999999999%,45%)',
  //     ranking: 19
  //   }
  // ]
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
