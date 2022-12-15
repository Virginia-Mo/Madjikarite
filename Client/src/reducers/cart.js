import { ADD_TO_CART, GET_FINAL_PRICE, REMOVE_ARTICLE, REMOVE_ONE_ITEM } from "../actions/cart";

const initialState = {
  cart : [],
  quantity : 0,
  totalPrice : 0,
  final_price : 0,
  addItemAnimation : false,
};

function reducer(state = initialState, action = {}) {
const {type, payload } = action
  switch (type) {
    case GET_FINAL_PRICE :
      return {
        ...state,
        final_price : payload.total + payload.shipping
      }


    case ADD_TO_CART:
      //  checking if the product I added to the cart is already in the cart
      const item = state.cart.find(
        product => product.id === payload.formData.id,
      );
    // if the product is already in the cart, I change the quantity and total price only, so I don't get same items in the cart
      if (item) {
        return {
          ...state,
    // checking again if the product is in the cart so i can return a new state
          cart: state.cart.map(item => item.id === payload.formData.id
            ? {
              ...item,
              quantity : item.quantity + payload.formData.quantity,
              total : item.total + payload.formData.total,
              totalWeight:item.totalWeight + payload.formData.totalWeight
            }
    // if the product is not in the cart, i don't do anything yet
            : item
          ),
    // to get the total price of the cart, i add the total price from the product added to the total already in the cart
          totalPrice: state.totalPrice + payload.formData.total,
        };
      }
    // if the product is not in the cart, i add it and all its properties in the crt trhough the sent payload
      return {
        ...state,
        cart: [...state.cart, payload.formData],
        totalPrice: state.totalPrice + payload.formData.total,
      };

  case REMOVE_ONE_ITEM:
    // Same process than for adding items but this one remove 1 item from the quantity
    const item2 = state.cart.find(
      product => product.id === payload.formData.id,
    );

    if (item2) {
      return {
        ...state,
        cart: state.cart.map(item => item.id === payload.formData.id
          ? {
            ...item,
            quantity : item.quantity - 1,
            total : item.total - payload.formData.price,
            totalWeight: item.totalWeight - payload.formData.weight
          }
          : item
        ),
        totalPrice: state.totalPrice - payload.formData.price,
      };
    }

    return {
      ...state,
    };
  case REMOVE_ARTICLE:
// to remove an item from the cart, i filter the cart and create a new array without the chosen item (found by its id)
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
