import { GET_DETAIL_HOUSE } from "../_constants/action";
import { API } from "../config/api";

export const getDetailHouse = id => {
  return {
    type: GET_DETAIL_HOUSE,
    async payload() {
      try {
        const house = await API.get(`/house/${id}`);
        console.log(house);
        return house.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};