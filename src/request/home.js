import { request } from "@/request/index";

// 获取电气元件内容
export function eComps() {
  return request({
    method: "GET",
    url: "/components/getElectricalComponents",
  })
}