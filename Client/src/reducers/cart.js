import { ADD_ANIMATION, ADD_TO_CART } from "../actions/cart";

const initialState = {
  cart : [],
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
            }
            : item
          ),
          // totalPrice: state.totalPrice + payload.price,
        };
      }
    
      return {
        ...state,
        cart: [...state.cart, payload.formData],
        // totalPrice: state.totalPrice + payload.price,
      };

    default:
      return state;
    };
  }

export default reducer;
