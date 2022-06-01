import { ACTION_TYPE } from "./user.actions";
import { initialState, UserState } from "./user.state";

// la liste des action pour maj le store
export default (state: UserState = initialState, action: any): any => {
    switch (action.type) {
        case ACTION_TYPE.GET_ALL_USER:
            return {
                allUser: action.response.data
            }
        default:
            return state;
    }
}