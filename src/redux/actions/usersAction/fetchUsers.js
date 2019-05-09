import {fetchUsersCall} from "../../services/usersServices";
import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_ERROR,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS
} from "../../constans/usersConstans";
import {HIDE_LOADING_BOX, SHOW_LOADING_BOX} from "../../constans/helpersConstants";

export const fetchUsers = () => {
  return async dispatch => {
    dispatch({type: FETCH_USERS_BEGIN});
    dispatch({type: SHOW_LOADING_BOX});
    dispatch({type: FETCH_USERS_PENDING});

    try {
      const response = await fetchUsersCall();
      const users = response.data;
      dispatch({type: FETCH_USERS_SUCCESS, payload: users});
      dispatch({type: HIDE_LOADING_BOX});
    } catch (e) {
      dispatch({type: FETCH_USERS_ERROR});
      dispatch({type: HIDE_LOADING_BOX});
    }
  };
};
