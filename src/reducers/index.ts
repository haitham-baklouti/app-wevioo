import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
import { routerReducer } from 'react-router-redux';
import { PostState } from '../modules/post/service/store/post.state';
import post from '../modules/post/service/store/post.reducer';
import { UserState } from '../modules/user/service/store/user.state';
import user from '../modules/user/service/store/user.reducer';
import { TagState } from '../modules/tag/service/store/tag.state';
import tag from '../modules/tag/service/store/tag.reducer';
import { CommentState } from '../modules/comment/service/store/comment.state';
import comment from '../modules/comment/service/store/comment.reducer';

// les reducers qui prennent le courant state et l'action et qui return une newState

export interface IRootState {
    readonly post: PostState;
    readonly user: UserState;
    readonly tag: TagState;
    readonly comment: CommentState;
};

const containersReducer = ({
    post,
    user,
    tag,
    comment
});

// config pour sauvgarder le store (user, tag) pour les récupérer directement sans faire appelle une autre fois du API
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