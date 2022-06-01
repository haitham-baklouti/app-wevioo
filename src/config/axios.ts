import axios from 'axios'
import { assocativeErrMap } from './mapper';

// initialiser la baseUrl
export const API_ROOT = 'https://dummyapi.io/data/v1/';

// initialiser la header
const instance = axios.create({
    baseURL: API_ROOT,
    headers: {
        'Accept-Version': 1,
        'app-id': '627b956fb058dc4fa16fa1b9'
    },
})

const gestionErreur = () => {
    instance.interceptors.response.use(
        response => {
            return response
        },
        error => {
            const err = error.response.data.error;
            alert(assocativeErrMap.get(err))
            return Promise.reject(err)
        }
    )
}

export function Get(url: any) {
    gestionErreur();
    return new Promise(resolve => {
        resolve(instance.get(url))
    })
}

export function Post(url: any, payload: any) {
    gestionErreur();
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
