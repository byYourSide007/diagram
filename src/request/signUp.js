import { request } from "@/request/index";

// 提交注册信息
export function signUpMessage(config) {
  return request({
    method: 'POST',
    url: "/user/sign-up",
    params: {
      username: config.username, // 用户名
      password: config.password, // 密码
      email: config.email, // 邮箱地址
    }
  })
}

// 查看邮箱是否已经被注册
export function checkEmailExist(email) {
  return request({
    method: 'POST',
    url: '/user/email-exist',
    params: {
      email
    }
    // params: {
    //   email
    // }
  })
}