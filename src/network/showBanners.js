import {request} from "./request";

export function showBannersInfo() {
    return request({
        url: "/showbanners"
    })
}
