import { ADD_FAME, ADD_GOLD } from ".";

export const addGold = (gold) => {
  return (dispatch, getState) => {
    let currentState = getState();
    let currentGold = currentState.player.gold + gold;
    dispatch({
      type: ADD_GOLD,
      payload: currentGold,
    });
  };
};

export const addFame = (fame) => {
  return (dispatch, getState) => {
    let currentState = getState();
    let currentFame = currentState.player.fame + fame;
    dispatch({
      type: ADD_FAME,
      payload: currentFame,
    });
  };
};
