import * as ActionTypes from '../actionTypes';

export const fetchPosts = payload => ({
  type: ActionTypes.FETCH_POSTS,
  payload,
});

export const setInitialPosts = payload => ({
  type: ActionTypes.SET_INITIAL_POSTS,
  payload,
});

export const setPosts = payload => ({
  type: ActionTypes.SET_POSTS,
  payload,
});

export const setPostsError = payload => ({
  type: ActionTypes.SET_POSTS_ERROR,
  payload,
});

export const resetPosts = () => ({
  type: ActionTypes.RESET_POSTS,
});
