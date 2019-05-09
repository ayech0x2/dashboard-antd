import {combineReducers} from "redux";
import {HIDE_LOADING_BOX, SHOW_LOADING_BOX} from "../constans/helpersConstants";


const loadingInitialState = {
  isLoadingBoxVisible: false
};
const loadingReducer = (state = loadingInitialState, action) => {
  switch (action.type) {
    case SHOW_LOADING_BOX:
      return {...state, isLoadingBoxVisible: true};
    case HIDE_LOADING_BOX:
      return {...state, isLoadingBoxVisible: false};
    default:
      return state;
  }

};

export default combineReducers({loadingReducer});
