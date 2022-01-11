import { GET_USERS } from "../_constants/action";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case `${GET_USERS}_REJECTED`:
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
