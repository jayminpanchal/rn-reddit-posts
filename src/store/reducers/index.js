import {combineReducers} from 'redux';

import PostReducer from './posts';

export const combinedReducers = combineReducers({
  post: PostReducer,
});
