import { GET_HOUSE_OWNER, GET_HOUSE_LIST } from "../_constants/action";
import { API, setAuthToken } from "../config/api";

export const getHouseOwner = () => {
  return {
    type: GET_HOUSE_OWNER,
    async payload() {
      try {
        const house = await API.get(
          "/listing",
          setAuthToken(localStorage.getItem("token"))
        );
        return house.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const getHouseList = (typeRent, belowPrice) => {
  return {
    type: GET_HOUSE_LIST,
    async payload() {
      try {
        if (typeRent || belowPrice) {
          const house = await API.get(
            `/houses`,
            {
              params: {
                typeRent: typeRent,
                belowPrice: belowPrice
              }
            },
            setAuthToken(localStorage.getItem("token"))
          );
          return house.data;
        } else {
          const houses = await API.get("/houses");
          return houses.data;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};
