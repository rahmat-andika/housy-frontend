import { POST_CHECKOUT } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const post = data => {
  return {
    type: POST_CHECKOUT,
    async payload() {
      try {
        const checkout = await API.post(
          `/order`,
          data,
          setAuthToken(localStorage.getItem("token"))
        );
        console.log(checkout);
        return checkout.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};