import {request} from "./request";

export function getUserInfo(uname,pwd) {
    return request({
        // url: "/login?leixin=&uname=张三&pwd=123",
        url: "/login",
        params:{
            leixin:'',
            uname:uname,
            pwd:pwd
        }
    })
}

export function showEvals() {
        return request({
            url: "/evals"
        })
}