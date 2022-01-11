import { createStore, combineReducers, applyMiddleware } from "redux";
import users from "../_reducers/user";
import orders from "../_reducers/order";
import detailOrder from "../_reducers/detail-order";
import house from "../_reducers/house";
import detailHouse from "../_reducers/detail-house";
import checkout from "../_reducers/checkout";

import { logger, promise } from "./middleware";

const middleware = [logger, promise];

// Global states
const rootReducer = combineReducers({
  users,
  orders,
  detailOrder,
  house,
  detailHouse,
  checkout,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
