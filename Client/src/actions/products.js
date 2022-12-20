export const HANDLE_DESCRIPTION = 'HANDLE_DESCRIPTION';

export function handleDescription() {
  return {
    type: HANDLE_DESCRIPTION,
  };
}
export const HANDLE_COMPOSITION = 'HANDLE_COMPOSITION';

export function handleComposition() {
  return {
    type: HANDLE_COMPOSITION,

  };
}
export const GET_PRODUCTS = 'GET_PRODUCTS';

export function fetchProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

export function saveProducts(products) {
  return {
    type: SAVE_PRODUCTS,
    payload : { products },
  };
}
