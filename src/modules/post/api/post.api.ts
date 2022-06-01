import axios from "../../../config/axios";

export interface IPostApi {
    getPost(page: number, rowsPerPage: number): any,
    getPostByUser(page: number, rowsPerPage: number, id: string): any,
}
// list des api pour l'post
export class PostApi implements IPostApi {
    // api all post
    async getPost(page: number, rowsPerPage: number) {
        return axios.Get('/post' + `?page=${page}&limit=${rowsPerPage}`);
    }
    // api filter par user
    async getPostByUser(page: number, rowsPerPage: number, id: string) {
        return axios.Get(`user/${id}/post` + `?page=${page}&limit=${rowsPerPage}`);
    }
}
