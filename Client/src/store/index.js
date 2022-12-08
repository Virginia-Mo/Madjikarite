/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose} from 'redux';

import reducer from '../reducers';
import productsAPI from '../middlewares/products';

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(productsAPI),
);

const store = createStore(reducer, enhancers);

export default store;
