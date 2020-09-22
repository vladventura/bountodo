import { CREATE_TODO, DELETE_TODO } from "../actions/";

let initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.payload) {
    case CREATE_TODO:
      let newList = state.todos;
      newList.push(action.payload);
      return {
        ...state,
        todos: newList,
      };
    case DELETE_TODO:
      let newList = state.todos.filter(
        (todo) => todo.name !== action.payload.name
      );
      return {
        ...state,
        todos: newList,
      };
    default:
      return state;
  }
};

export default rootReducer;
