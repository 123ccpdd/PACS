import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = 'http://localhost:8042/'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }

    ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    if (err.response?.status === 401) {
      router.push('/login')
    }

    ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
