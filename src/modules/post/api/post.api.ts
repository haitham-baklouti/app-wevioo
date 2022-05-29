import axios from "../../../config/axios";

export interface IPostApi {
    getPost(page: number, rowsPerPage: number): any
}
export class PostApi implements IPostApi {
    async getPost(page: number, rowsPerPage: number) {
        return axios.Get('/post' + `?page=${page}&limit=${rowsPerPage}`);
    }
}