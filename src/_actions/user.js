import { GET_USERS } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const getUsers = () => {
  return {
    type: GET_USERS,
    async payload() {
      try {
        const users = await API.get("/user", setAuthToken(localStorage.getItem("token")));
        return users.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};