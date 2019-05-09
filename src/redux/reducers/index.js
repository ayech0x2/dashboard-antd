import {combineReducers} from "redux";
import userReducer from "./user";
import helpers from "./helpers";

const rootReducer = combineReducers({userReducer, helpers});

export default rootReducer;
