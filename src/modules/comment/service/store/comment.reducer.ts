import { ACTION_TYPE } from "./comment.actions";
import { initialState, CommentState } from "./comment.state";

export default (state: CommentState = initialState, action: any): any => {
    switch (action.type) {
        case ACTION_TYPE.GET_ALL_COMMENT:
            return {
                allComment: action.response.data,
                limit: action.response.limit,
                page: action.response.page,
                total: action.response.total,
            }
        default:
            return state;
    }
}