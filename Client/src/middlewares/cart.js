import axios from 'axios';
import { SUBMIT_ORDER } from '../actions/cart';

const API_BASE_URL = 'https://madjikarite.onrender.com';

const cartAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_ORDER:
      const { cart: { cart, final_price } } = store.getState();
      const { user: {message } } = store.getState();
      const token = localStorage.getItem("token")

      axios 
      .post(`${API_BASE_URL}/shopping-cart`,{cart,message, final_price }, 
       { headers: {
        Authorization: `bearer ${token}`
      }},  
      )
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {
        alert("Vous devez être connecté pour commander")
          console.log(error);
      });
      next(action);
      break;
      default:
        next(action);
    }
  }
export default cartAPI;
