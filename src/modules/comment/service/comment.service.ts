import { commentApi } from "../api";
import { ACTION_TYPE } from "./store/comment.actions";

export const getComments = (idPost: string, page: number, rowsPerPage: number) => async (dispatch: any) => {
    const result: any = await commentApi.getAllComment(idPost, page, rowsPerPage);
    dispatch({
        type: ACTION_TYPE.GET_ALL_COMMENT,
        response: result.data
    })
}; 