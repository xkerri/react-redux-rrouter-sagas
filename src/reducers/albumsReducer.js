import { FETCH_ALBUMS, RECIEVE_ALBUMS, FAILURE_ALBUMS } from "../actions";

const initialState = {
  fetching: false,
  albums: [],
  error: null
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_ALBUMS:
      return Object.assign({}, state, { fetching: true });
    case RECIEVE_ALBUMS:
      return Object.assign({}, state, {
        albums: actions.payload,
        fetching: false
      });
    case FAILURE_ALBUMS:
      return Object.assign({}, state, {
        fetching: false,
        albums: [],
        error: actions.payload
      });
    default:
      return state;
  }
};
