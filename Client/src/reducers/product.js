import { HANDLE_DESCRIPTION, HANDLE_COMPOSITION, SAVE_PRODUCTS, SAVE_CATEGORIES} from "../actions/products";


export const initialState = {
  listProducts :[],
  listCategories :[],
  activeDescription : true,
  activeComposition : false,
}


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
    case SAVE_PRODUCTS:
      return {
        ...state,
        listProducts: payload.products,
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        listCategories: payload.categories,
      };
    default:
      return state;
  }
}


export default reducer;
