import axios from "../../../config/axios";

export interface ICommentApi {
    getAllComment(idPost: string, page: number, rowsPerPage: number): any,
    addComment(payload: Object): any
}
export class CommentApi implements ICommentApi {
    async getAllComment(idPost: string, page: number, rowsPerPage: number) {
        return axios.Get(`/post/${idPost}/comment` + `?page=${page}&limit=${rowsPerPage}`);
    }
    async addComment(payload: Object) {
        return axios.Post(`/comment/create`, payload);
    }
}
