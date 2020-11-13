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
        url: '/user/changeinfo',
        method: 'post',
        data: data
    })
}