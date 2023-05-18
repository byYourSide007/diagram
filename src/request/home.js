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

// 上传图片类型图纸
export function sendImgBlueprint(formData){
  return request({
    method: "POST",
    url: '/imgBlueprint',
    data: formData
  })
}


// 下载图纸
export function getBlueprint(username, id) {
  return request({
    method: "GET",
    url: "/getBlueprint",
    data: {
      username,
      id,
    },
    responseType: 'blob'
  })
}