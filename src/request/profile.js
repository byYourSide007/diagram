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

// 发送留言信息
export function publishMsg(user_id, comment) {
  return request({
    method: "POST",
    url: "/publish",
    data: {
      user_id,// 用户 id
      comment, // 评论信息
    }
  })
}

// 获取所有的留言信息
export function getComment() {
  return request({
    method: "get",
    url: "/getComment",
  })
}