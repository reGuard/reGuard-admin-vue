import Request from './request'
import { BASE_URl, TIME_OUT } from './request/config'

const quest = new Request({
  baseURL: BASE_URl,
  timeout: TIME_OUT,
  //实例的可选拦截器
  interceptors: {
    requestInterceptors: (config) => {
      return config
    },
    requestInterceptorsCatch: (err) => {
      return err
    },
    responseInterceptors: (res) => {
      return res
    },
    responseInterceptorsCatch: (err) => {
      return err
    }
  }
})

export default quest
