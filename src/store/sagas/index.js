import {all} from 'redux-saga/effects';

import {fetchPostsWatcher} from './posts';

function* rootSaga() {
  yield all([fetchPostsWatcher()]);
}

export default rootSaga;
