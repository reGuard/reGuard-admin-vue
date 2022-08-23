import axios from 'axios'
//导出的本身就是axios的实例

//axios的配置选项
axios.defaults.baseURL = 'xxx'
axios.defaults.timeout = 5000

//axios.all 多个请求 一起返回
/* axios.all([
     axios.get,
       axios.post 
       

]).then( res =>{
    console.log(res[0])
    console.log(res[1])
})
 */

//拦截器
//fn1请求发送成功的函数
//fn2请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    //config.headers = {}
    console.log('请求成功的拦截')
    return config
  },
  () => {
    console.log('请求失败的拦截')
  }
)
axios.interceptors.request.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {}
)
