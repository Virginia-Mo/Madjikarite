import axios from 'axios';
import { useState } from 'react';
import { GET_ORDERS, saveOrders } from '../actions/admin';

const API_BASE_URL = 'https://madjikarite.onrender.com';

const adminAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ORDERS :
  
      console.log("mw OK")
      const token = localStorage.getItem('token');
      axios
        .get(`${API_BASE_URL}/admin/orders`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {  
          console.log("REPONSE OK" + response.data);
          // store.dispatch(saveOrders(response.data));
          
          setOrders(response.data)
        })
        .catch((error) => console.log(error))
      next(action);
      break;

    default:
      next(action);
  }
};

export default adminAPI;
