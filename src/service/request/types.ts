import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface myRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (err: any) => any
}
export interface MyRquestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: myRequestInterceptors<T>
  showLoading?: boolean
}
