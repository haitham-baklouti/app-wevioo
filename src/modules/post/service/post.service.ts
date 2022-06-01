import { postApi } from "../api";
import { ACTION_TYPE } from "./store/post.actions";

// la liste des services
export const getAllPost = (page: number, rowsPerPage: number) => async (dispatch: any) => {
    // appelle la function pour exécuter l'api all post 
    const result: any = await postApi.getPost(page, rowsPerPage);
    // affecter la new state dans le store 
    dispatch({
        type: ACTION_TYPE.GET_ALL_POST,
        response: result.data
    })
};

export const getAllPostByUser = (page: number, rowsPerPage: number, id: string) => async (dispatch: any) => {
    // appelle la function pour exécuter l'api filter par user
    const result: any = await postApi.getPostByUser(page, rowsPerPage, id);
    // affecter la new state dans le store 
    dispatch({
        type: ACTION_TYPE.GET_ALL_POST_BY_USER,
        response: result.data
    })
};