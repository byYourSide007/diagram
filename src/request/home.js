import { request } from "@/request/index";

// 获取电气元件内容
export function eComps() {
  return request({
    method: "GET",
    url: "/getElectricalComponents",
  })
}

// 向后端保存 stage 数据
export function sendStage(data) {
  return request({
    method: "POST",
    url: '/stageSave',
    data: {
      stageData: data
    }
  })
}

export function getBlueprint() {
  return request({
    method: "GET",
    url: "/getBlueprint",
    responseType: 'blob'
  })
}