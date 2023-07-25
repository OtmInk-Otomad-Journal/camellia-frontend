import { ref } from 'vue'
const data = ref({
  'ranking': 42,
  'score': 2.863,
  'aid': 28123491,
  'bvid': "BHSNyu244",
  'title': "【东方滑灯宴】合作单品",
  'uploader': "坏枪",
  'copyright': "1",
  'play': 10103,
  'like': 21293,
  'coin': 212,
  'star': 2134,
  'pubtime': "2023/04/04 23:48:37",
  'adjust_scale': 1,
  'part': 1,
  "full_time": 20,
  "sep_time": 20,
  "start_time": 10,
  "end_time": 30,
  "video_src": "/video/12345.mp4",
  "web_video_src": "http://localhost:7213/video/34567.mp4",
  "cover_src": "http://localhost:7213/cover/12345.png",
  "avatar_src": "http://localhost:7213/avatar/12345.png"
});
function fun(obj) {
  data.value = {
    ...obj
  }
}
window['inject'] = (obj) => {
  return fun(obj)
}
export default data
