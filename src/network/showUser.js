import {request} from "./request";

export function showUserAllInfo() {
    return request({
        url: "/showuser"
    })
}