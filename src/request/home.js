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
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 获取用户名下所有的图纸
export function getBlueprintList(user_id){
  return request({
    method: "POST",
    url: '/getBlueprintList',
    data: {user_id},
  })
}


// 下载图纸
export function getBlueprint(username, id) {
  return request({
    method: "GET",
    url: "/getBlueprint",
    data: {
      id,
    },
    responseType: 'blob'
  })
}

// 获取图纸总数
export function countBluePrint(user_id) {
  return request({
    method: "POST",
    url: "/countBluePrint",
    data: {
      user_id,
    },
  })
}

// 获取搜索内容
export function searchBack(content) {
  return request({
    method: "POST",
    url: "/search",
    data: {
      content,
    },
  })
}