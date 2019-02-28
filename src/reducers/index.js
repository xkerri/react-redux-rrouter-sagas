import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import albumsReducer from "./albumsReducer";
import todosReducer from "./todosReducer";
import pokemonReducer from "./pokemonsReducer";

export default combineReducers({
  post: postsReducer,
  albums: albumsReducer,
  todos: todosReducer,
  pokemons: pokemonReducer
});
