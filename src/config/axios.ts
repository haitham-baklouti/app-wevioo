import axios from 'axios'

export const API_ROOT = 'https://dummyapi.io/data/v1/';

const instance = axios.create({
    baseURL: API_ROOT,
    headers: {
        'Accept-Version': 1,
        'app-id': '627b956fb058dc4fa16fa1b9'
    },
})

export function Get(url: any) {
    return new Promise(resolve => {
        resolve(instance.get(url))
    })
}

export function Post(url: any, payload: any) {
    return new Promise(resolve => {
        resolve(instance.post(url, payload))
    })
}

const { interceptors, defaults } = instance
export default {
    Get,
    Post,
    interceptors,
    defaults,
}
