import AsyncStorage from "@react-native-community/async-storage";
import { LOAD_DATA, LOAD_DATA_ERR, SAVE_DATA, SAVE_DATA_ERR } from "./";
import { LOCAL_STORAGE_KEY_NAME } from "../../constants";

export const loadData = () => {
  return (dispatch, getState) => {
    AsyncStorage.getItem(LOCAL_STORAGE_KEY_NAME)
      .then((data) => {
        let incomingData = JSON.parse(data);
        dispatch({
          type: LOAD_DATA,
          payload: incomingData,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOAD_DATA_ERR,
          err: err,
        });
      });
  };
};

export const saveData = () => {
  return (dispatch, getState) => {
    let currentState = getState();
    let outgoingData = JSON.stringify({
      fame: currentState.player.fame,
      gold: currentState.player.gold,
      todos: currentState.todo.todos,
    });
    AsyncStorage.setItem(LOCAL_STORAGE_KEY_NAME, outgoingData)
      .then((data) => {
        dispatch({
          type: SAVE_DATA,
        });
      })
      .catch((err) => {
        dispatch({
          type: SAVE_DATA_ERR,
          err: err,
        });
      });
  };
};
