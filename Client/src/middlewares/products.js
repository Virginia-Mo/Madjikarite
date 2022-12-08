import axios from 'axios';
// import { RECIPES_FETCH, saveRecipes } from '../actions/recipes';

const API_BASE_URL = 'https://madjikarite.onrender.com/category4/product';

const recipesAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case RECIPES_FETCH:
      axios
        .get(`${API_BASE_URL}`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(set(response.data));
        })
        .catch((error) => console.log(error));
      next(action);
      break;

    default:
      next(action);
  }
};

export default recipesAPI;

