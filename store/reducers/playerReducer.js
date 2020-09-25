import { PLAYER_ATTRS } from "../../constants";

const { ADD_GOLD, ADD_FAME, FINISHED_TODO, LOAD_DATA } = require("../actions");

let initialState = {
  [PLAYER_ATTRS.gold]: 0,
  [PLAYER_ATTRS.fame]: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOLD:
      return {
        ...state,
        [PLAYER_ATTRS.gold]: action.payload,
      };
    case ADD_FAME:
      return {
        ...state,
        [PLAYER_ATTRS.fame]: action.payload,
      };
    case FINISHED_TODO:
      return {
        ...state,
        [PLAYER_ATTRS.fame]:
          state[PLAYER_ATTRS.fame] + action.payload[PLAYER_ATTRS.fame],
        [PLAYER_ATTRS.gold]:
          state[PLAYER_ATTRS.gold] + action.payload[PLAYER_ATTRS.gold],
      };
    case LOAD_DATA:
      return {
        ...state,
        [PLAYER_ATTRS.fame]: action.payload[PLAYER_ATTRS.fame],
        [PLAYER_ATTRS.gold]: action.payload[PLAYER_ATTRS.gold],
      };
    default:
      return state;
  }
};

export default playerReducer;
