import {createSelector} from 'reselect';

export const postSelector = state => state.post;

export const getPostsSelector = createSelector(
  postSelector,
  post => post.posts,
);

export const nextPageKeySelector = createSelector(
  postSelector,
  post => post.after,
);

export const isLoadingSelector = createSelector(
  postSelector,
  post => post.loading,
);
