import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_CURRENT_NAME,
  CHANGE_CURRENT_DESCRIPTION,
  SET_RARITY,
  LOAD_DATA,
  INVALID,
  DISMISS_ERRORS,
} from "../actions/";

let initialState = {
  todos: [],
  todo: {
    name: "",
    description: "",
    id: 0,
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      if (state.todo.name !== "" && state.todo.description !== "") {
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              ...state.todo,
              id: state.todos.length + 1,
            },
          ],
        };
      } else return state;

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case CHANGE_CURRENT_NAME:
      let nameChange = { ...state.todo, name: action.payload };
      return {
        ...state,
        todo: nameChange,
      };
    case CHANGE_CURRENT_DESCRIPTION:
      let newTodo = { ...state.todo, description: action.payload };
      return {
        ...state,
        todo: { ...newTodo },
      };
    case SET_RARITY:
      return {
        ...state,
        todo: {
          ...state.todo,
          rarity: action.payload,
        },
      };
    case LOAD_DATA:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case INVALID:
      return {
        ...state,
        errors: action.err,
      };
    case DISMISS_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default todoReducer;
