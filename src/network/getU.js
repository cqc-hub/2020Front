import {request} from "./request";

export function getUserInfo() {
    return request({
        url: "/login?leixin=&uname=张三&pwd=123"
    })
}