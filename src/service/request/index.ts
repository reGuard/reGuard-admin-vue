import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { myRequestInterceptors, MyRquestConfig } from './types'

import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import { ElLoading } from 'element-plus'

class Request {
  //内部类型
  instance: AxiosInstance
  interceptors?: myRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean
  constructor(config: MyRquestConfig) {
    this.instance = axios.create(config)
    //如如果config里面没有传入showloading 就使用默认值 true
    this.showLoading = config.showLoading ?? true
    this.interceptors = config.interceptors

    //实例的可选拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    //所有实例都有的拦截器
    this.instance.interceptors.request.use((config) => {
      if (this.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: '请求中',
          background: 'rgba(0,0,0,0.5)'
        })
      }
      return config
    })
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (error) => this.loading?.close()
    )
  }

  request<T>(config: MyRquestConfig<T>): Promise<T> {
    return new Promise((reslove, reject) => {
      if (config.showLoading === false) {
        this.showLoading = false
        console.log(this.showLoading)
      }
      //单独配置的拦截器

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.requestInterceptors) {
            config = config.interceptors?.requestInterceptors(config)
          }
          //将结果返回出去
          reslove(res)
          this.showLoading = true
        })
        .catch((err) => {
          console.log(err)
          this.showLoading = true
          reject(err)
        })
    })
  }
  get<T>(config: MyRquestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'get' })
  }
  post<T>(config: MyRquestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'post' })
  }
  delete<T>(config: MyRquestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'delete' })
  }
  put<T>(config: MyRquestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'put' })
  }
}
export default Request
