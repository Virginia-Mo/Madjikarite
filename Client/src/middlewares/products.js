import axios from 'axios';
// import products from "src/Data/data"
import { PRODUCT_BY_CATEGORY, saveProductByCategory } from '../actions/products';

const API_BASE_URL = 'https://madjikarite.onrender.com';

const productsAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case PRODUCT_BY_CATEGORY:
      axios
        .get(`${API_BASE_URL}/products`)
        .then((response) => {
          console.log(response.data);
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


