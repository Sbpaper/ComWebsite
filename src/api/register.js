import request from '@/utils/request'

export function Register(data) {
    return request({
        url: '/register/register',
        method: 'post',
        data: data
    })
}