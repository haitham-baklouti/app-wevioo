import { ACTION_TYPE } from "./post.actions";
import { initialState, PostState } from "./post.state";

export default (state: PostState = initialState, action: any): any => {
    switch (action.type) {
        case ACTION_TYPE.GET_ALL_POST:
            return {
                allPost: action.response.data,
                limit: action.response.limit,
                page: action.response.page,
            }
        default:
            return state;
    }
}