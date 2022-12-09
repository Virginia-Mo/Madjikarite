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
export const PRODUCT_BY_CATEGORY = 'PRODUCT_BY_CATEGORY';

export function fetchProductByCategory() {
  return {
    type: PRODUCT_BY_CATEGORY,
  };
}

export const SAVE_PRODUCT_BY_CATEGORY = 'SAVE_PRODUCT_BY_CATEGORY';

export function saveProducts(products) {
  return {
    type: SAVE_PRODUCT_BY_CATEGORY,
    payload : { products },
  };
}
