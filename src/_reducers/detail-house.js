import { GET_DETAIL_HOUSE } from "../_constants/action";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DETAIL_HOUSE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_DETAIL_HOUSE}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case `${GET_DETAIL_HOUSE}_REJECTED`:
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
