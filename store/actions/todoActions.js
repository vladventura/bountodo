import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_CURRENT_NAME,
  CHANGE_CURRENT_DESCRIPTION,
  FINISHED_TODO,
  SET_RARITY,
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

export const finishedTodo = (todo) => {
  return (dispatch, getState) => {
    let fame = _getRandomInt(todo.rarity.minFame, todo.rarity.maxFame);
    let gold = _getRandomInt(todo.rarity.minGold, todo.rarity.maxGold);
    dispatch({
      type: FINISHED_TODO,
      payload: { fame, gold },
    });
  };
};

export const setRarity = (rarity) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_RARITY,
      payload: rarity,
    });
  };
};

const _getRandomInt = (x, y) => {
  let min = Math.ceil(x);
  let max = Math.floor(y) + 1;
  return Math.floor(Math.random() * (max - min) + min);
};
