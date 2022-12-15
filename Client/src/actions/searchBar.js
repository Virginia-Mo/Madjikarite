export const SEARCH_CHANGE = 'SEARCH_CHANGE';
export const DISPLAY_SEARCH_PRODUCTS = 'DISPLAY_SEARCH_PRODUCTS';
export const DISPLAY_MENU = 'DISPLAY_MENU';

export const changeSearch = (value) => ({
  type: SEARCH_CHANGE,
  payload: { value },
});

export const displaySearchRequest = (value) => ({
  type: DISPLAY_SEARCH_PRODUCTS,
  payload: { value },
});

export const displayMenu = () => ({
  type: DISPLAY_MENU,
});
