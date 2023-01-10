import { combineReducers } from 'redux';

import adminReducer from './admin';
import productReducer from './product';
import userReducer from './user';
import searchReducer from './searchBar';
import cartReducer from './cart'

const rootReducer = combineReducers({
  admin: adminReducer,
  products: productReducer,
  user: userReducer,
  searchBar: searchReducer,
  cart : cartReducer
});

export default rootReducer;
