import { combineReducers } from 'redux';
import { PostState } from '../modules/post/service/store/post.state';
import post from '../modules/post/service/store/post.reducer';
import { UserState } from '../modules/user/service/store/user.state';
import user from '../modules/user/service/store/user.reducer';
import { TagState } from '../modules/tag/service/store/tag.state';
import tag from '../modules/tag/service/store/tag.reducer';

export interface IRootState {
    readonly post: PostState;
    readonly user: UserState;
    readonly tag: TagState;
};

const rootReducer = combineReducers<IRootState>({
    post,
    user,
    tag
});

export default rootReducer;