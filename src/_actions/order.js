import { GET_ORDERS, POST_APPROVE } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const getOrders = () => {
  return {
    type: GET_ORDERS,
    async payload() {
      try {
        const orders = await API.get("/orders", setAuthToken(localStorage.getItem("token")));
        console.log(orders)
        return orders.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const approve = (id, data) => {
  return {
    type: POST_APPROVE,
    async payload() {
      try {
        const orders = await API.patch(
          `/order/${id}`,
          data,
          setAuthToken(localStorage.getItem("token"))
        );
        return orders.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};