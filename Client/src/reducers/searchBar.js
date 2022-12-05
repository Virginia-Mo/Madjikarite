import { SEARCH_CHANGE, DISPLAY_SEARCH_PRODUCTS } from '../actions/searchBar';

const initialState = {
  search: '',
  products: [],
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
    default:
      return state;
  }
};

export default reducer;
