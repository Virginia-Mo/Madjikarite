export const GET_FINAL_PRICE = 'GET_FINAL_PRICE';

export function getFinalPrice(total, shipping) {
  return {
    type: GET_FINAL_PRICE,
    payload: { total, shipping },
  };
}


export const ADD_TO_CART = 'ADD_TO_CART';

export function addItemToCart(formData) {
  return {
    type: ADD_TO_CART,
    payload: { formData },
  };
}

export const REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM';

export function minusItemFromCart(formData) {
  return {
    type: REMOVE_ONE_ITEM,
    payload: {formData },
  };
}
  export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
  
  export function removeArticleFromCart(id,total) {
    return {
      type: REMOVE_ARTICLE,
      payload: { id,total },
    };
  }
export const SUBMIT_ORDER = 'SUBMIT_ORDER';

export function submitOrder(formData) {
  return {
    type: SUBMIT_ORDER,
    payload: { formData },
  };
}

export const GET_MESSAGE_BUTTON = 'GET_MESSAGE_BUTTON'

export function getMessageButton() {
  return {
    type: GET_MESSAGE_BUTTON,
  };
}
export const RESET_MESSAGE_BUTTON = 'RESET_MESSAGE_BUTTON'

export function resetMessageButton() {
  return {
    type: RESET_MESSAGE_BUTTON,
  };
}

