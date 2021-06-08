import axios from '@/axios.js'

var api = {
  login (params) {
    return axios.get(':8080/stu/login', params) // 这个是各个接口名字
  },
  change (params) {
    return axios.get(':8080/stu/change', params)
  },
  getInformation () {
    return axios.get(':8080/stu/informations.json')
  }
}

export default api
