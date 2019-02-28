import { ADD_TODO, DELETE_TODO, COMPLETED_TODO } from "../actions";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, { ...action.payload }]
      });

    case DELETE_TODO:
      const { payload } = action;
      return Object.assign({}, state, {
        todos: state["todos"].filter(todo => todo.id !== payload.id)
      });

    case COMPLETED_TODO:
      return Object.assign({}, state, {
        todos: state["todos"].map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      });
    default:
      return state;
  }
};
