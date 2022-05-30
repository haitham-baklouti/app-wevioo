import { combineReducers } from 'redux';
import { PostState } from '../modules/post/service/store/post.state';
import post from '../modules/post/service/store/post.reducer';
import { UserState } from '../modules/user/service/store/user.state';
import user from '../modules/user/service/store/user.reducer';
import { TagState } from '../modules/tag/service/store/tag.state';
import tag from '../modules/tag/service/store/tag.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
import { routerReducer } from 'react-router-redux';

export interface IRootState {
    readonly post: PostState;
    readonly user: UserState;
    readonly tag: TagState;
};

const containersReducer = ({
    post,
    user,
    tag
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'user',
        'tag'
    ],
}

const appReducer = combineReducers({
    ...containersReducer,
    router: routerReducer,
})


const createGlobalReducer = () => persistReducer(persistConfig, appReducer)

export default createGlobalReducer;