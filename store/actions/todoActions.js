import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_CURRENT_NAME,
  CHANGE_CURRENT_DESCRIPTION,
} from "./";

export const createTodo = () => {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_TODO,
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };
};

export const changeName = (name) => {
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_CURRENT_NAME,
      payload: name,
    });
  };
};

export const changeDescription = (description) => {
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_CURRENT_DESCRIPTION,
      payload: description,
    });
  };
};
