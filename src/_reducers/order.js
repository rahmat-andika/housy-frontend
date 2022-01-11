import { GET_ORDERS, POST_APPROVE } from "../_constants/action";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDERS}_PENDING`:
    case `${POST_APPROVE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ORDERS}_FULFILLED`:
    case `${POST_APPROVE}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case `${GET_ORDERS}_REJECTED`:
    case `${POST_APPROVE}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
