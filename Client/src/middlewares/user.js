import axios from "axios";
import { SIGN_UP_USER, LOGIN, DELETE_ACCOUNT, GET_ACCOUNT, UPDATE_ACCOUNT } from "../actions/user";
import {  saveUser, saveUserInfos } from '../actions/user';
import { deleteAccount } from "../actions/user";

const API_BASE_URL = 'https://madjikarite.onrender.com';

const usersAPI = (store) => (next) => (action) => {

  switch (action.type) {

    case SIGN_UP_USER:
      const { user : { first_name, last_name, password, email, address, zip_code, city, country, phone_number }} = store.getState();
       
      axios 
        .post(`${API_BASE_URL}/signup`, {
            first_name, 
            last_name, 
            password, 
            email, 
            address, 
            zip_code,
            city,
            country,  
            phone_number,
        })
        .then((response) => {
            console.log(response);
            const { token } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('logged', true);
            store.dispatch(saveUser());
            if (response.status === 200) {
              window.location.href = '/';
            }
        })
        .catch((error) => {
            console.log(error.statusText);
        });
        next(action);
        break;
  
        
    case LOGIN: {
      const { user: { email, password } } = store.getState();

      axios
        .post(`${API_BASE_URL}/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response + "CONNEXION OK");
          const { token } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('logged', true);
        
           store.dispatch(saveUser());
          if (response.status === 200) {
            window.location.href = '/';
          }
        })
        .catch((error) => {
          // @TODO : manage errors → state.user.loading + message + …
          console.log(error);
        });
        next(action);
        break;
      }

    case DELETE_ACCOUNT: {
      const token = localStorage.getItem('token');

      axios
        .delete(`${API_BASE_URL}/profile`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {
          localStorage.clear();
          alert(response.data.message);
          if (response.status === 200) {
            window.location.href = '/';
          }
        })
        .catch((error) => {
          console.log(error)
        });
        next(action);
        break;
    }

    case GET_ACCOUNT: {
      const token = localStorage.getItem('token');

      axios
        .get(`${API_BASE_URL}/profile`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserInfos(response.data));
        })
        .catch((error) => {
          console.log(error)
        });
        next(action);
        break;
    }

    case UPDATE_ACCOUNT: {
      const token = localStorage.getItem('token');

      axios
        .patch(`${API_BASE_URL}/profile`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error)
        });

        next(action);
        break;
    }

  default:
    next(action);
    }
}
;

export default usersAPI;
