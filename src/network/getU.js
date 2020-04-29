import {request} from "./request";

export function getUserInfo(uname,pwd) {
    return request({
        // url: "/login?leixin=&uname=张三&pwd=123",
        url: "/login",
        params:{
            leixin:'',
            uname,
            pwd
        }
    })
}

export function showEvals() {
        return request({
            url: "/evals"
        })
}

export function regUserInfo(uname,pwd,sex,age,birth) {
    return request({
        url: "/reg",
        params:{
            leixin:'',
            uname,
            pwd,
            sex,
            age,
            birth
        }
    })
}