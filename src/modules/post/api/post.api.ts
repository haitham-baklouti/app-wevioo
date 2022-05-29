import axios from "../../../config/axios";

export interface IPostApi {
    getPost(): any
}
export class PostApi implements IPostApi {
    async getPost() {
        return axios.Get('/post');
    }
}