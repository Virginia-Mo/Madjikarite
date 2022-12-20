/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose} from 'redux';

import reducer from '../reducers';
import productsAPI from '../middlewares/products';
import usersAPI from '../middlewares/user';
import cartAPI from '../middlewares/cart';
import adminAPI from '../middlewares/admin';
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(productsAPI, usersAPI, cartAPI,adminAPI),
);

const store = createStore(reducer, enhancers);

export default store;
