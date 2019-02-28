import { FETCH_POSTS, RECIEVE_POSTS, FAILURE_POSTS } from "../actions";

const initialState = {
  fetching: false,
  posts: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return Object.assign({}, state, { fetching: true });
    }
    case RECIEVE_POSTS:
      return Object.assign({}, state, {
        fetching: false,
        posts: action.payload
      });
    case FAILURE_POSTS: {
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload,
        posts: []
      });
    }
    default:
      return state;
  }
};
