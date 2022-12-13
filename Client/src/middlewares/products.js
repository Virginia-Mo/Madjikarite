import axios from 'axios';
import { useParams } from 'react-router';
import { GET_PRODUCTS, GET_CHOSEN_PRODUCT, saveProducts } from '../actions/products';

const API_BASE_URL = 'https://madjikarite.onrender.com';

const productsAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      axios
        .get(`${API_BASE_URL}/products`)
        .then((response) => {
          console.log("API");
          store.dispatch(saveProducts(response.data));
        })
        .catch((error) => console.log(error))
      next(action);
      break;
      // case GET_CATEGORIES:
      //   console.log("click")
      //   axios
      //     .get(`${API_BASE_URL}/product:${slug}`)
      //     .then((response) => {
      //     console.log(response.data);
      //       store.dispatch(saveSingleProduct(response.data));
      //     })
      //     .catch((error) => console.log(error))
      //   next(action);
      //   break;
    default:
      next(action);
  }
};

export default productsAPI;


