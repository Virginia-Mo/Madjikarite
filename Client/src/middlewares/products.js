import axios from 'axios';
import { GET_PRODUCTS, saveProducts } from '../actions/products';
import { GET_PRODUCTS_BY_ADMIN, saveProductsByAdmin } from '../actions/products';

const API_BASE_URL = 'https://madjikarite.onrender.com';

const productsAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      axios
        .get(`${API_BASE_URL}/products`)
        .then((response) => {
          store.dispatch(saveProducts(response.data));
        })
        .catch((error) => console.log(error))
      next(action);
      break;

    default:
      next(action);
  } 
};

export default productsAPI;
