import request from '@/utils/request'

export function UserInfo(data) {
    return request({
        url: '/user/info',
        method: 'post',
        data: data
    })
}

export function Changeinfo(data) {
    return request({
        url: '/user/change/userinfo',
        method: 'post',
        data: data
    })
}

export function ChangeUsername(data) {
    return request({
        url: '/user/change/username',
        method: 'post',
        data: data
    })
}

export function ChangePassword(data) {
    return request({
        url: '/user/change/password',
        method: 'post',
        data: data
    })
}