import { tagApi } from "../api";
import { ACTION_TYPE } from "./store/tag.actions";

// la liste des services 
export const getTags = () => async (dispatch: any) => {
    // appelle la function pour exécuter l'api tag
    const result: any = await tagApi.getAllTag();
    // affecter la new state dans le store 
    dispatch({
        type: ACTION_TYPE.GET_ALL_TAG,
        response: result.data
    })
};