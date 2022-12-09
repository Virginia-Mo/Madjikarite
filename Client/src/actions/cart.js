export const ADD_TO_CART = 'ADD_TO_CART';

export function addItemToCart(formData) {
  return {
    type: ADD_TO_CART,
    payload: { formData },
  };
}
