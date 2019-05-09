import axios from "axios";
import {api} from "../../helper/API";

export const fetchUsersCall = () => {
  return axios.get(`${api}/users`);
};
