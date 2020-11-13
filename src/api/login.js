import request from '@/utils/request'

export function Userlogin(data) {
    return request({
        url: '/login/signin',
        method: 'post',
        data: data
    })
}