import {combineReducers} from "redux";
import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_ERROR,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS
} from "../constans/usersConstans";

const initialState = {
  usersList: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return state;
    case FETCH_USERS_PENDING:
      return state;
    case FETCH_USERS_SUCCESS:
      return {...state, usersList: action.payload};
    case FETCH_USERS_ERROR:
      return state;
    default:
      return state;
  }

};

export default userReducer;
