import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://imchang.free.idcfengye.com', // api的base_url
  timeout: 200000 // 请求超时时间
})
export default service
