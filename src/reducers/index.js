import { combineReducers } from 'redux'
import likeReducer from './like.js';
import commentReducer from './comment';

const rootReducer = combineReducers({
   comments: commentReducer,
   likes: likeReducer
 })
 export default rootReducer;
