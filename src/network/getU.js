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
//http://localhost:8080/swin/reviseEvals?uname=吕布&create=1588179170444&eval=轻轻松松第一名&uid=21
export function reviseEvals(uname,create,eval1,uid) {
    return request({
        url: "/reviseEvals",
        params:{
            uname,
            create,
            eval:eval1,
            uid
        }
    })
}