import { SAVE_ORDERS } from "../actions/admin";
import { SAVE_PRODUCTS_BY_ADMIN } from "../actions/admin";

const initialState = {
  listOrders : [],
};

function reducer(state = initialState, action = {}) {
const {type, payload } = action

  switch (type) {

    case SAVE_ORDERS : 
    return {
      ...state,
      listOrders : payload.orders
    }

    default:
      return state;
  }
}

export default reducer;
