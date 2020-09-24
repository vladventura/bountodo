import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_CURRENT_NAME,
  CHANGE_CURRENT_DESCRIPTION,
  FINISHED_TODO,
  SET_RARITY,
  INVALID,
  DISMISS_ERRORS,
} from "./";

import { ERRORS as ers, META as mt } from "../../constants";

export const createTodo = () => {
  return (dispatch, getState) => {
    let currentState = getState();
    let errors = _validate(currentState);
    console.log("From the create action ", errors);
    if (errors === "") {
      dispatch({
        type: CREATE_TODO,
      });
    } else {
      dispatch({
        type: INVALID,
        err: errors,
      });
    }
  };
};

export const dismissErrors = () => {
  return (dispatch, getState) => {
    dispatch({
      type: DISMISS_ERRORS,
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

const _validate = (currentState) => {
  let { name, description, rarity } = currentState.todo.todo;
  let errors = [];

  if (name === "") errors.push(ers.emptyName);
  else if (name.length > mt.nameMaxChars) errors.push(ers.nameOver);
  else if (name.length < mt.nameMinChars) errors.push(ers.nameUnder);

  if (description === "") errors.push(ers.emptyDescription);
  else if (description.length > mt.descriptionMaxChars)
    errors.push(ers.descriptionOver);
  else if (description.length < mt.descriptionMinChars)
    errors.push(ers.descriptionUnder);

  if (!rarity || !rarity?.name) errors.push(ers.noRarity);

  let errorString = errors.length > 1 ? errors.join("\n") : errors[0] || "";

  return errorString;
};

const _getRandomInt = (x, y) => {
  let min = Math.ceil(x);
  let max = Math.floor(y) + 1;
  return Math.floor(Math.random() * (max - min) + min);
};
