import request from '@/utils/request'

export function Search(data) {
    return request({
        url: '/tag/search',
        method: 'post',
        data: data
    })
}

export function alltag(data) {
    return request({
        url: '/tag/all',
        method: 'post',
        data: data
    })
}

export function tophottaglist(data) {
    return request({
        url: '/tag/tophottaglist',
        method: 'post',
        data: data
    })
}