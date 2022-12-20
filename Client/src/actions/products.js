export const HANDLE_DESCRIPTION = 'HANDLE_DESCRIPTION';
export const HANDLE_COMPOSITION = 'HANDLE_COMPOSITION';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const DISPLAY_PRODUCTS_BY_CATEGORY = 'DISPLAY_PRODUCTS_BY_CATEGORY';

// Action to handle the description
export function handleDescription() {
  return {
    type: HANDLE_DESCRIPTION,
  };
}

// Action to handle the composition
export function handleComposition() {
  return {
    type: HANDLE_COMPOSITION,

  };
}

// Action to get the products
export function fetchProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

// Action to save the products
export function saveProducts(products) {
  return {
    type: SAVE_PRODUCTS,
    payload : { products },
  };
}
// Action to get the categories
export function fetchCategories() {
  return {
    type: GET_CATEGORIES,
  };
}
// Action to save the categories
export function saveCategories(categories) {
  return {
    type: SAVE_CATEGORIES,
    payload : { categories },
  };
}
