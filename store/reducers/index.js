import { combineReducers } from "redux";
import todo from "./todoReducer";
import player from "./playerReducer";

export default combineReducers({
  todo,
  player,
});
