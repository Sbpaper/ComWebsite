import request from '@/utils/request'

export function authUserlogin(data) {
    return request({
        url: '/auth/adminLogin',
        method: 'post',
        data: data
    })
}