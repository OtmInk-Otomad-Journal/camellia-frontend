import { ref } from 'vue'
// 初始化
const data = ref({
  duration: 100,
  start_time: 108.7501565,
  full_time: 10,
  web_prefix: 'http://localhost:7213/',
  more_data: [
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '希望与梦想的兔兔',
      subtitle: 'Fibonacci Collab.',
      web_prefix: 'http://localhost:7213/',
      cover: './cover/231090115.png'
    },
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '希望与梦想的兔兔',
      subtitle: 'Fibonacci Collab.',
      web_prefix: 'http://localhost:7213/',
      cover: './cover/231090115.png'
    },
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '希望与梦想的兔兔',
      subtitle: 'Fibonacci Collab.',
      web_prefix: 'http://localhost:7213/',
      cover: './cover/231090115.png'
    },
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '希望与梦想的兔兔',
      subtitle: 'Fibonacci Collab.',
      web_prefix: 'http://localhost:7213/',
      cover: './cover/231090115.png'
    },
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '希望与梦想的兔兔',
      subtitle: 'Fibonacci Collab.',
      web_prefix: 'http://localhost:7213/',
      cover: './cover/231090115.png'
    },
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '希望与梦想的兔兔',
      subtitle: 'Fibonacci Collab.',
      web_prefix: 'http://localhost:7213/',
      cover: './cover/231090115.png'
    },
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '希望与梦想的兔兔',
      subtitle: 'Fibonacci Collab.',
      web_prefix: 'http://localhost:7213/',
      cover: './cover/231090115.png'
    },
    {
      color: '#66ccff',
      progress: '进行中',
      date: '11<m>月</m>23<m>日</m>',
      title: '希望与梦想的兔兔',
      subtitle: 'Fibonacci Collab.',
      web_prefix: 'http://localhost:7213/',
      cover: './cover/231090115.png'
    }
  ]
})
function fun(obj) {
  data.value = {
    ...obj
  }
  if (data.value.more_data) {
    data.value.more_data.forEach((element) => {
      element.cover = element.web_prefix + element.cover
    })
  }
  return new Promise((resolve) => {
    resolve()
  })
}

export { data, fun }
