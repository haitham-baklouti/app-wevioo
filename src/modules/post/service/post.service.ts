import { postApi } from "../api";
import { ACTION_TYPE } from "./store/post.actions";

export const getAllPost = (page: number, rowsPerPage: number) => async (dispatch: any) => {
    const result: any = await postApi.getPost(page, rowsPerPage);
    dispatch({
        type: ACTION_TYPE.GET_ALL_POST,
        response: result.data
    })
};

export const getAllPostByUser = (page: number, rowsPerPage: number, id: string) => async (dispatch: any) => {
    const result: any = await postApi.getPostByUser(page, rowsPerPage, id);
    dispatch({
        type: ACTION_TYPE.GET_ALL_POST_BY_USER,
        response: result.data
    })
};