import { CREATE_TODO, DELETE_TODO } from "../actions/";

let initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.payload) {
    case CREATE_TODO:
      let addingList = state.todos;
      addingList.push(action.payload);
      return {
        ...state,
        todos: addingList,
      };
    case DELETE_TODO:
      let removingList = state.todos.filter(
        (todo) => todo.name !== action.payload.name
      );
      return {
        ...state,
        todos: removingList,
      };
    default:
      return state;
  }
};

export default rootReducer;
