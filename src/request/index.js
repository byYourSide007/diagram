import axios from "axios";

export function request(config) {
  const instance = axios.create({
    // baseURL: "http://127.0.0.1:8000", // 测试用本地端口，需要加上 http 请求前缀，否则会拼接localhost
    // baseURL: "http://127.4.13.126:3009", // 测试用本地端口，需要加上 http 请求前缀，否则会拼接localhost
    baseURL: "http://121.4.13.126:3009/", // 测试用本地端口，需要加上 http 请求前缀，否则会拼接localhost
    timeout: 5000, // 五秒超时
    // timeout: 10000, // 五秒超时
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}, // 请求头信息
  })

  /* 请求拦截器 */
  axios.interceptors.request.use(_config => {
    return _config;
  }, error => {
    console.log(error)
  })

  /* 响应拦截器 */
  axios.interceptors.response.use(res => {
    return res;
  }, async error => {
    // // 超时重传
    // const delay = new Promise((resolve) => {    // 节流函数
    //   setTimeout(() => {
    //     resolve();
    //   }, 200);// 间隔两百毫秒请求一次，等待回传
    // });
    // // 如果是取消请求，则不继续发送请求
    // if (error.message === "canceled") {
    //   return error; // 直接结束，不等待响应
    // }
    // // 重新发起请求
    // return delay.then(function () {
    //   return request(error.config);
    // });
    console.log(`error_response_interceptor: ${error}`)
  })

  return instance(config);
}