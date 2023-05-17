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