import { takeLatest, call, put } from "redux-saga/effects";
import { FAILURE_POSTS, RECIEVE_POSTS, FETCH_POSTS } from "../actions";
import { FETCH_ALBUMS, RECIEVE_ALBUMS, FAILURE_ALBUMS } from "../actions";
import { FETCH_POKEMON, RECIEVE_POKEMON, FAILURE_POKEMON } from "../actions";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import pokeApi from "../apis/pokeApi";

const getPostsCall = () => {
  return jsonPlaceholder.get("/posts");
};

const getAlbumsCall = () => {
  return jsonPlaceholder.get("/albums");
};

function* getPosts() {
  try {
    const response = yield call(getPostsCall);
    const { data } = response;
    yield put({ type: RECIEVE_POSTS, payload: data });
  } catch (error) {
    console.log(error);
    yield put({ type: FAILURE_POSTS, payload: error });
  }
}

function* getAlbums() {
  try {
    const response = yield call(getAlbumsCall);
    const { data } = response;
    yield put({ type: RECIEVE_ALBUMS, payload: data });
  } catch (error) {
    console.log(error);
    yield put({ type: FAILURE_ALBUMS, payload: error });
  }
}

function* getPokemons() {
  try {
    const response = yield call(pokeApi);
    const { data } = response;
    yield put({ type: RECIEVE_POKEMON, payload: data });
  } catch (error) {
    console.log(error);
    yield put({ type: FAILURE_POKEMON, payload: error });
  }
}

export function* watchPostsAsync() {
  yield takeLatest(FETCH_POSTS, getPosts);
}

export function* watchAlbumsAsyc() {
  yield takeLatest(FETCH_ALBUMS, getAlbums);
}

export function* watchPokemonAsync() {
  yield takeLatest(FETCH_POKEMON, getPokemons);
}
