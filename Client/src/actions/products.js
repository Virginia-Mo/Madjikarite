export const PRODUCT_BY_CATEGORY = 'PRODUCT_BY_CATEGORY';

export function fetchProductByCategory() {
  return {
    type: PRODUCT_BY_CATEGORY,
  };
}
export const SAVE_PRODUCT_BY_CATEGORY = 'SAVE_PRODUCT_BY_CATEGORY';

export function saveProductByCategory(products) {
  return {
    type: SAVE_PRODUCT_BY_CATEGORY,
    payload : { products },
  };
}
