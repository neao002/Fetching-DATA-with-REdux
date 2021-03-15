/**
 * This is root reducer file which can combine many reducers and export as one package
 */
import { combineReducers } from "redux";

// import postReducer
import postReducer from "./postReducer";
// import userReducer

import userReducer from "./userReducer";

export default combineReducers({
  postReducer,
  userReducer,
  //userReducer
});
