import { ACTION_TYPE } from "./tag.actions";
import { initialState, TagState } from "./tag.state";

// la liste des action pour maj le store
export default (state: TagState = initialState, action: any): any => {
    switch (action.type) {
        case ACTION_TYPE.GET_ALL_TAG:
            return {
                allTag: action.response.data
            }
        default:
            return state;
    }
}