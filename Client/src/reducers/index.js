import { combineReducers } from 'redux';

import adminReducer from "./admin";
import productReducer from "./product";
import userReducer from "./user";
import searchReducer from "./searchBar";

const rootReducer = combineReducers({
  admin: adminReducer,
  products : productReducer,
  user: userReducer,
  searchBar: searchReducer,
});

export default rootReducer;
