import { postApi } from "../api";
import { ACTION_TYPE } from "./store/post.actions";

export const getAllPost = () => async (dispatch: any) => {
    const result: any = await postApi.getPost();
    dispatch({
        type: ACTION_TYPE.GET_ALL_POST,
        response: result.data
    })
};