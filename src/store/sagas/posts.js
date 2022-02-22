import {call, put, takeLatest} from 'redux-saga/effects';
import {toQueryString} from '../../utils';
import {setInitialPosts, setPosts, setPostsError} from '../actions';

import * as ActionTypes from '../actionTypes';

const fetchPosts = query =>
  fetch(`https://api.reddit.com/r/programming/hot.json?${query}`);

const searchPosts = query =>
  fetch(`https://api.reddit.com/r/programming/search.json?${query}`);

function* fetchPostsActionEffect({payload}) {
  try {
    const query = payload ? toQueryString(payload) : '';
    console.log('query', query);
    let response = null;
    if (payload?.q) {
      response = yield call(searchPosts, query);
    } else {
      response = yield call(fetchPosts, query);
    }
    const jsonResponse = yield response.json();
    console.log('jsonResponse', jsonResponse);
    if (payload?.after) {
      yield put(setPosts(jsonResponse.data));
    } else {
      yield put(setInitialPosts(jsonResponse.data));
    }
  } catch (error) {
    console.log('error', error);
    yield put(setPostsError(error.message));
  }
}
export function* fetchPostsWatcher() {
  yield takeLatest(ActionTypes.FETCH_POSTS, fetchPostsActionEffect);
}
