export const SEARCH_CHANGE = 'SEARCH_CHANGE';
export const DISPLAY_SEARCH_PRODUCTS = 'DISPLAY_SEARCH_PRODUCTS';

export const changeSearch = (value) => ({
  type: SEARCH_CHANGE,
  payload: { value },
});

export const displaySearchRequest = (value) => ({
  type: DISPLAY_SEARCH_PRODUCTS,
  payload: { value },
});
