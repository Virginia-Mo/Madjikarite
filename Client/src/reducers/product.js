import products from "src/Data/data";
import { SAVE_PRODUCT_BY_CATEGORY } from "src/actions/products";

export const initialState = {
  listProducts : products.produits,
  categoryProducts : [],
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  console.log(payload);
  
  switch (type) {
    case SAVE_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        categoryProducts: payload.products,
      };
    default:
      return state;
  }
}

export default reducer;
