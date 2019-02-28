import {
  FETCH_POKEMON,
  RECIEVE_POKEMON,
  FAILURE_POKEMON,
  CATCH_POKEMON
} from "../actions";

const initialState = {
  fetching: false,
  pokemons: [],
  error: null,
  catchedPokemon: 147
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return Object.assign({}, state, { fetching: true });
    case RECIEVE_POKEMON:
      return Object.assign({}, state, {
        fetching: false,
        pokemons: action.payload
      });
    case FAILURE_POKEMON:
      return Object.assign({}, state, {
        fetching: false,
        pokemons: [],
        error: action.payload
      });
    case CATCH_POKEMON:
      return Object.assign({}, state, { catchedPokemon: action.payload });
    default:
      return state;
  }
};
