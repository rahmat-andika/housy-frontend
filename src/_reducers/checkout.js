import { POST_CHECKOUT } from "../_constants/action";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_CHECKOUT}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${POST_CHECKOUT}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case `${POST_CHECKOUT}_REJECTED`:
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