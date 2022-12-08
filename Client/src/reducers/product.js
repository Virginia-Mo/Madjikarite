import products from "src/Data/data"
import { HANDLE_DESCRIPTION, HANDLE_COMPOSITION } from "../actions/products";
import products from "src/Data/data";
import { SAVE_PRODUCT_BY_CATEGORY } from "src/actions/products";

export const initialState = {
  listProducts : products.produits,
  activeDescription : true,
  activeComposition : false,
    categoryProducts : [],
}


const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  console.log(payload);
  
  switch (type) {
    case HANDLE_DESCRIPTION:
      return {
        ...state,
        activeDescription : true,
        activeComposition : false,
      }
      case HANDLE_COMPOSITION:
        return {
          ...state,
          activeComposition : true,
          activeDescription : false
        }
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
