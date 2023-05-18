import { request } from "@/request/index";

// 修改个人信息
export function modifyIt(name, message, id) {
  return request({
    method: "POST",
    url: "/modifyProfile",
    data: {
      name, // 修改的内容
      message, // 修改的原内容
      id, // 用户id
    }
  })
}

// 获取用户头像信息
export function getAvatar(username) {
  return request({
    method: "POST",
    url: "/getAvatar",
    data: {
      username,
    }
  })
}