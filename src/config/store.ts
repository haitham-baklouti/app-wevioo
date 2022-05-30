import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createGlobalReducer from '../reducers/index'

const store = createStore(createGlobalReducer(), applyMiddleware(thunk));

export default store;