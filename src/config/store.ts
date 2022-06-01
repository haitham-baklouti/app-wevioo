import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createGlobalReducer from '../reducers/index'

// création du store en uilisant le middileware (redux-thunk)
const store = createStore(createGlobalReducer(), applyMiddleware(thunk));

export default store;