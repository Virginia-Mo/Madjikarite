export const GET_ORDERS = 'GET_ORDERS';

export function fetchOrders() {
  return {
    type: GET_ORDERS,
  };
}
export const SAVE_ORDERS = 'SAVE_ORDERS';

export function saveOrders(orders) {
  return {
    type: SAVE_ORDERS,
    payload : { orders },
  };
}

