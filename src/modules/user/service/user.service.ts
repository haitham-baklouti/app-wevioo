import { userApi } from "../api";
import { ACTION_TYPE } from "./store/user.actions";

// la liste des services 
export const getUsers = () => async (dispatch: any) => {
    // appelle la function pour exécuter l'api user
    const result: any = await userApi.getAllUser();
    // affecter la new state dans le store 
    dispatch({
        type: ACTION_TYPE.GET_ALL_USER,
        response: result.data
    })
};