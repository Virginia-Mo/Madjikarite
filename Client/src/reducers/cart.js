import { ADD_TO_CART, REMOVE_ARTICLE, REMOVE_ONE_ITEM } from "../actions/cart";

const initialState = {
  cart : [],
  totalPrice : 0,
  cartTotal : 0,
  addItemAnimation : false,
};

function reducer(state = initialState, action = {}) {
const {type, payload } = action
  switch (type) {
    case ADD_TO_CART:
      
      const item = state.cart.find(
        product => product.id === payload.formData.id,
      );
    
      if (item) {
        return {
          ...state,
          cart: state.cart.map(item => item.id === payload.formData.id
            ? {
              ...item,
              quantity : item.quantity + payload.formData.quantity,
              total : item.total + payload.formData.total,
              totalCart : state.total
            }
            : item
          ),
          totalPrice: state.totalPrice + payload.formData.total
        };
      }
    
      return {
        ...state,
        cart: [...state.cart, payload.formData],
        totalPrice: state.totalPrice + payload.formData.total, 
 
      };

case REMOVE_ONE_ITEM:
  const item2 = state.cart.find(
    product => product.id === payload.id,
  );

  if (item2) {
    return {
      ...state,
      cart: state.cart.map(item => item.id === payload.id
        ? {
          ...item,
          quantity : item.quantity - 1,
          total : item.total - payload.price,
        }
        : item
      ),
      totalPrice: state.totalPrice - payload.price
    };
  }

  return {
    ...state,
  };
  case REMOVE_ARTICLE:

      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload.id ),
        totalPrice: state.totalPrice - payload.total
      };
    
    default:
      return state;
    };
  }

export default reducer;
