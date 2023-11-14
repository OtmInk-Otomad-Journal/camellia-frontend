import { ref } from 'vue'
// 初始化
const data = ref({
  duration: 100,
  start_time: 108.7501565,
  full_time: 20,
  web_prefix: 'http://localhost:7213/',
  more_data: [
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '斐波那契合作',
      subtitle: 'Fibonacci Collab.'
    },
    {
      color: 'red',
      progress: '已坠毁',
      date: '?<m>月</m>?<m>日</m>',
      title: 'BON合作',
      subtitle: 'BOOM Collab.'
    },
    {
      color: '#66ccff',
      progress: '进行中',
      date: '明年',
      title: '观众选',
      subtitle: 'Guanguan Collab.'
    }
  ]
})
function fun(obj) {
  data.value = {
    ...obj
  }
  if (data.value.more_data) {
    data.value.more_data.forEach((element) => {
      element.cover_src = element.web_prefix + element.cover_src
    })
  }
  return new Promise((resolve) => {
    resolve()
  })
}

export { data, fun }
