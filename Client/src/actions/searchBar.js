export const SEARCH_CHANGE = 'SEARCH_CHANGE';
export const DISPLAY_SEARCH_PRODUCTS = 'DISPLAY_SEARCH_PRODUCTS';
export const DISPLAY_MENU = 'DISPLAY_MENU';

// Action to change the search value
export const changeSearch = (value) => ({
  type: SEARCH_CHANGE,
  payload: { value },
});

// Action to display the search products
export const displaySearchRequest = (value) => ({
  type: DISPLAY_SEARCH_PRODUCTS,
  payload: { value },
});

// Action to display the burger menu
export const displayMenu = () => ({
   type: DISPLAY_MENU,
});
