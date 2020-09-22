import {
    CREATE_TODO,
    DELETE_TODO,
    CHANGE_CURRENT_NAME,
    CHANGE_CURRENT_DESCRIPTION,
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
      default:
        return state;
    }
  };
  
  export default todoReducer;
  