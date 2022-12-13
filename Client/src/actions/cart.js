export const ADD_TO_CART = 'ADD_TO_CART';

export function addItemToCart(formData) {
  return {
    type: ADD_TO_CART,
    payload: { formData },
  };
}

// export const CHANGE_TOTAL_VALUE = 'CHANGE_TOTAL_VALUE';

// export function handleChangeTotal(price, id) {
//   console.log(price + "TEST" + id);
//   return {
//     type: CHANGE_TOTAL_VALUE,
//     payload: { price, id },
//   };
// }

export const REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM';

export function minusItemFromCart(price,id) {
  return {
    type: REMOVE_ONE_ITEM,
    payload: { price,id },
  };
}
  export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
  
  export function removeArticleFromCart(id,total) {
    return {
      type: REMOVE_ARTICLE,
      payload: { id,total },
    };
  }
  


