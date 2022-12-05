// import axios from 'axios';
// import products from "src/Data/data"
// // import { RECIPES_FETCH, saveRecipes } from '../actions/recipes';

// // const API_BASE_URL = 'http://localhost:3001';

// const recipesAPI = (store) => (next) => (action) => {
//   switch (action.type) {
//     case RECIPES_FETCH:
//       axios
//         .get(`${API_BASE_URL}/recipes`)
//         .then((response) => {
//           // console.log(response.data);
//           store.dispatch(saveRecipes(response.data));
//         })
//         .catch((error) => console.log(error));
//       next(action);
//       break;

//     default:
//       next(action);
//   }
// };

// export default recipesAPI;
