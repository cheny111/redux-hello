import { createStore } from 'redux';
import commentReducer from './reducers/comment.js';

let store=createStore(commentReducer)
export default store;
