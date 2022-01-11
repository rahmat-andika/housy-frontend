import { GET_DETAIL_ORDER, PAY_ORDER } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const getDetailOrder = (id) => {
  return {
    type: GET_DETAIL_ORDER,
    async payload() {
      try {
        const orders = await API.get(`/order/${id}`, setAuthToken(localStorage.getItem("token")));
        console.log(orders)
        return orders.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const payOrder = (id, data) => {
  return {
    type: PAY_ORDER,
    async payload() {
      try {
        const orders = await API.patch(`/order/${id}`, data, setAuthToken(localStorage.getItem("token")));
        console.log(orders)
        return orders.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
