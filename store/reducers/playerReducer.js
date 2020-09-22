const { ADD_GOLD } = require("../actions");

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
    default:
      return state;
  }
};

export default playerReducer;
