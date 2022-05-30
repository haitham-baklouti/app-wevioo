import { userApi } from "../api";
import { ACTION_TYPE } from "./store/user.actions";

export const getUsers = () => async (dispatch: any) => {
    const result: any = await userApi.getAllUser();
    dispatch({
        type: ACTION_TYPE.GET_ALL_USER,
        response: result.data
    })
};