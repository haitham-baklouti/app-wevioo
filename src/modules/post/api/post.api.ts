import axios from "../../../config/axios";

export interface IPostApi {
    getPost(page: number, rowsPerPage: number): any,
    getPostByUser(page: number, rowsPerPage: number, id: string): any,
}
export class PostApi implements IPostApi {
    async getPost(page: number, rowsPerPage: number) {
        return axios.Get('/post' + `?page=${page}&limit=${rowsPerPage}`);
    }
    async getPostByUser(page: number, rowsPerPage: number, id: string) {
        return axios.Get(`user/${id}/post` + `?page=${page}&limit=${rowsPerPage}`);
    }
}
