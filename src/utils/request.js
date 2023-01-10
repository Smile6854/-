// 1.创建一个新的axios实例
// 2.请求拦截器，如果有token进行头部携带
// 3.响应拦截器：1.剥离无效数据 2.处理token失效
// 4.导出一个函数，调用当前的axsio实例发送请求，返回promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 导出基准地址， 原因：其他地方不是通过axios发请求的地方用上脊椎地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios 的一些配置，baseURL timeout
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token就在头部携带
    // 1.获取用户信息对象
    const profile = store.state.user.profile
    // 2.判断是否有token
    if (profile.token) {
      // 设置token
      config.headers.Authorization = `base ${profile.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
instance.interceptors.request.use(
  // 取出data数据。将来调用接口 的时候直接拿到的就是后台的数据
  (res) => {
    return res.data
  },
  (err) => {
    // 401状态码，进入该函数
    if (err.response && err.response.status === 401) {
      // 1. 清空本地无效信息
      // 2. 跳转到登陆页码
      // 3.跳转需要传参（当前路由地址）给登录页码
      store.commit('user/setUser', {})
      //   当前路由地址
      // 组件里头 ： `/user?a=10` $router.path ==== /user  $route.fullPath === /user?a=10
      // js模块中 ：router.currentRoute.value.fullPath 就是的当前路由地址，router.currentRoute 是ref响应式数据
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      //   encodeURIComponent 转换url编码，防止解析地址出问题
      router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
  }
)

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求：请求地址，请求方式，提交数据
  return instance({
    url,
    method,
    // 1.如果是get请求 需要使用params来传递submitData
    // 2.如果不是get请求 需要使用data来传递submitData
    // []是指一个动态的key ,写js表达式，js表达式的执行结果当作key
    // method参数  ：get Get GET 转换成小写在判断
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
