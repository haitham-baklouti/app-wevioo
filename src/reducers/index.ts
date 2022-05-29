import { combineReducers } from 'redux';
import { PostState } from '../modules/post/service/store/post.state';
import post from '../modules/post/service/store/post.reducer';

export interface IRootState {
    readonly post: PostState;
};

const rootReducer = combineReducers<IRootState>({
    post
});

export default rootReducer;