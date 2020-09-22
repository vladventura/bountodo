import { CREATE_TODO, DELETE_TODO } from "./";

export const createTodo = (todo) => {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_TODO,
      payload: todo,
    });
  };
};

export const deleteTodo = (todo) => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_TODO,
      payload: todo,
    });
  };
};
