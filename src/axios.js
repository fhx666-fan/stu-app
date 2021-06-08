import axios from 'axios'
axios.defaults.baseURL = 'http//localhost:8080/admin'// 这个是你的baseURL
axios.interceptors.request.use(config => {
  // 设置统一的请求头：如何配置访问有token的接口
  if (localStorage.token) {
    config.headers.Authorization = localStorage.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.params = {
    ...config.params
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios