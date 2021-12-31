import { combineReducers } from "redux";
import basketReducer from "./cartReducer";
let reducer = combineReducers({ basketReducer });
export default reducer;