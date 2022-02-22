import * as ActionTypes from '../actionTypes';

const initialState = {
  after: null,
  before: null,
  loading: false,
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return {
        ...state,
        loading: true,
        posts: action?.payload?.after ? state.posts : [],
      };

    case ActionTypes.SET_INITIAL_POSTS:
      return {
        ...state,
        loading: false,
        after: action.payload.after,
        before: action.payload.before,
        posts: action.payload.children,
      };

    case ActionTypes.SET_POSTS:
      return {
        ...state,
        loading: false,
        after: action.payload.after,
        before: action.payload.before,
        posts: state.posts.concat(action.payload.children),
      };

    case ActionTypes.SET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
