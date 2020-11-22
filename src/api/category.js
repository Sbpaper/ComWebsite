import request from '@/utils/request'

export function Querylist(data) {
    return request({
        url: '/category/querylist',
        method: 'post',
        data: data
    })
}

export function Add(data) {
    return request({
        url: '/category/add',
        method: 'post',
        data: data
    })
}