import { HANDLE_DESCRIPTION, HANDLE_COMPOSITION, SAVE_PRODUCTS, DISPLAY_ICON} from "../actions/products";


export const initialState = {
  listProducts :[],
  activeDescription : true,
  activeComposition : false,
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
    case SAVE_PRODUCTS:
      return {
        ...state,
        listProducts: payload.products,
      };
    default:
      return state;
  }
}


export default reducer;
