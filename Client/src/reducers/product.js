import products from "src/Data/data"
import { HANDLE_DESCRIPTION, HANDLE_COMPOSITION } from "../actions/products";

export const initialState = {
  listProducts : products.produits,
  activeDescription : true,
  activeComposition : false,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
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
    default:
      return state;
  }
}

export default reducer;
