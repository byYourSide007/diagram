import { request } from "@/request/index";

// 修改个人信息
export function sendQuestionMsg(question, category) {
  return request({
    method: "POST",
    url: "/questionMsg",
    data: {
      category,
      question
    }
  })
}