import axios from "../../../config/axios";

export interface ICommentApi {
    getAllComment(idPost: string, page: number, rowsPerPage: number): any,
    addComment(payload: Object): any
}
// list des api pour l'comment
export class CommentApi implements ICommentApi {
    // api all comment par post
    async getAllComment(idPost: string, page: number, rowsPerPage: number) {
        return axios.Get(`/post/${idPost}/comment` + `?page=${page}&limit=${rowsPerPage}`);
    }
    // api add comment par post
    async addComment(payload: Object) {
        return axios.Post(`/comment/create`, payload);
    }
}
