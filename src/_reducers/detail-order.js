import { GET_DETAIL_ORDER, PAY_ORDER } from "../_constants/action";

const initialState = {
  data: [],
  success: false,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DETAIL_ORDER}_PENDING`:
    case `${PAY_ORDER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_DETAIL_ORDER}_FULFILLED`:
    case `${PAY_ORDER}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        success: true
      };
    case `${GET_DETAIL_ORDER}_REJECTED`:
    case `${PAY_ORDER}_REJECTED`:
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
