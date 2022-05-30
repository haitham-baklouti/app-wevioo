import { combineReducers } from 'redux';
import { PostState } from '../modules/post/service/store/post.state';
import post from '../modules/post/service/store/post.reducer';
import { UserState } from '../modules/user/service/store/user.state';
import user from '../modules/user/service/store/user.reducer';

export interface IRootState {
    readonly post: PostState;
    readonly user: UserState;
};

const rootReducer = combineReducers<IRootState>({
    post,
    user
});

export default rootReducer;