import { commentApi } from "../api";
import { ACTION_TYPE } from "./store/comment.actions";

// la liste des services 
export const getComments = (idPost: string, page: number, rowsPerPage: number) => async (dispatch: any) => {
    // appelle la function pour exécuter l'api comment par post
    const result: any = await commentApi.getAllComment(idPost, page, rowsPerPage);
    // affecter la new state dans le store 
    dispatch({
        type: ACTION_TYPE.GET_ALL_COMMENT,
        response: result.data
    })
};

export const addCommentPost = (payload: any) => async (dispatch: any) => {
    // appelle la function pour exécuter l'api add comment par post
    await commentApi.addComment(payload);
    // appelle la function pour exécuter l'api comment par post
    const result: any = await commentApi.getAllComment(payload.post, 0, 5);
    // affecter la new state dans le store 
    dispatch({
        type: ACTION_TYPE.GET_ALL_COMMENT,
        response: result.data
    })
}; 