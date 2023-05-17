import { request } from "@/request/index";

// 修改个人信息
export function modifyIt(name, message) {
  return request({
    method: "POST",
    url: "/modifyProfile",
    data: {
      name,
      message
    }
  })
}