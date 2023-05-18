import { request } from "@/request/index";

// 查看密码是否正确
export function checkPsw(username, password) {
    return request({
        method: "POST",
        url: "/checkPsw",
        data: {
            username,
            password
        }
    })
}

// 修改密码
export function updatePsw(username, password) {
    return request({
        method: "POST",
        url: "/updatePsw",
        data: {
            username, // 新的用户名
            password, // 新密码
        }
    })
}

// 上传用户头像
export function updateAvatar(formData) {
    return request({
        method: "POST",
        url: "/updateAvatar",
        data: formData, // 头像信息
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}


