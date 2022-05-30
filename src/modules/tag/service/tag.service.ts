import { tagApi } from "../api";
import { ACTION_TYPE } from "./store/tag.actions";

export const getTags = () => async (dispatch: any) => {
    const result: any = await tagApi.getAllTag();
    dispatch({
        type: ACTION_TYPE.GET_ALL_TAG,
        response: result.data
    })
};