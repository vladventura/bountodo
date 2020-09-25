import { ADD_FAME, ADD_GOLD } from ".";
import { PLAYER_ATTRS } from "../../constants";

export const addGold = (gold) => {
  return (dispatch, getState) => {
    let currentState = getState();
    let currentGold = currentState.player[PLAYER_ATTRS.gold] + gold;
    dispatch({
      type: ADD_GOLD,
      payload: currentGold,
    });
  };
};

export const addFame = (fame) => {
  return (dispatch, getState) => {
    let currentState = getState();
    let currentFame = currentState.player[PLAYER_ATTRS.fame] + fame;
    dispatch({
      type: ADD_FAME,
      payload: currentFame,
    });
  };
};
