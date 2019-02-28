export const FETCH_POSTS = "FETCH_POSTS";
export const RECIEVE_POSTS = "RECEIVE_POSTS";
export const FAILURE_POSTS = "FAILURE_POSTS";
export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const RECIEVE_ALBUMS = "RECIEVE_ALBUMS";
export const FAILURE_ALBUMS = "FAILURE_ALBUMS";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const FETCH_POKEMON = "FETCH_POKEMON";
export const RECIEVE_POKEMON = "RECIEVE_POKEMON";
export const FAILURE_POKEMON = "FAILURE_POKEMON";
export const CATCH_POKEMON = "CATCH_POKEMON";

//Actions creators
export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  };
};

export const receivePosts = data => {
  return {
    type: RECIEVE_POSTS,
    payload: data
  };
};

export const failurePosts = error => {
  return {
    type: FAILURE_POSTS,
    payload: error
  };
};

export const fetchAlbums = () => {
  return {
    type: FETCH_ALBUMS
  };
};

export const recieveAlbums = data => {
  return {
    type: RECIEVE_ALBUMS,
    payload: data
  };
};

export const failureAlbums = data => {
  return {
    type: FAILURE_ALBUMS,
    payload: data
  };
};

export const addTodo = data => {
  return {
    type: ADD_TODO,
    payload: data
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: { id }
  };
};

export const updateTodo = id => {
  return {
    type: UPDATE_TODO,
    payload: { id }
  };
};

export const completedTodo = id => {
  return {
    type: COMPLETED_TODO,
    payload: { id }
  };
};

export const fetchPokemon = () => {
  return {
    type: FETCH_POKEMON
  };
};

export const receivePokemons = data => {
  return {
    type: RECIEVE_POKEMON,
    payload: data
  };
};

export const failurePokemons = data => {
  return {
    type: FAILURE_POKEMON,
    payload: data
  };
};

export const catchPokemon = data => {
  return {
    type: CATCH_POKEMON,
    payload: data
  };
};
