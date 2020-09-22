const { ADD_GOLD, ADD_FAME, FINISHED_TODO } = require("../actions");

let initialState = {
  gold: 0,
  fame: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOLD:
      return {
        ...state,
        gold: action.payload,
      };
    case ADD_FAME:
      return {
        ...state,
        fame: action.payload,
      };
    case FINISHED_TODO:
      return {
        ...state,
        fame: state.fame + action.payload.fame,
        gold: state.gold + action.payload.gold,
      };
    default:
      return state;
  }
};

export default playerReducer;
