import { combineReducers } from "redux";
import { arrayReducer } from "./arrayReducer/arrayReducer";
import { speedReducer } from "./speedReducer/speedReducer";

export default combineReducers({
  arrayProperties: arrayReducer,
  speedProperties: speedReducer,
});
