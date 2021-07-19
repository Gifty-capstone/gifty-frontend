import friendReducer from "./friendReducer";
import loadReducer from "./loadReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  friends : friendReducer,
  loadFriends : loadReducer
})

export default allReducers;