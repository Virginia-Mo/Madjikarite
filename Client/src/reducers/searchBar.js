import { SEARCH_CHANGE, DISPLAY_SEARCH_PRODUCTS, DISPLAY_MENU } from '../actions/searchBar';

const initialState = {
  search: '',
  products: [],
  openMenu: false,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_CHANGE:
      return {
        ...state,
        search: payload.value,
      };
    
    case DISPLAY_SEARCH_PRODUCTS:
      return {
        ...state,
        products: payload.value,
      };
    
    // Toggle the burger menu
    case DISPLAY_MENU:
      return {
        ...state,
        openMenu: !state.openMenu
      };

    default:
      return state;
  }
};

export default reducer;
