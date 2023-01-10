import axios from "axios";
import { SIGN_UP_USER, LOGIN, DELETE_ACCOUNT, GET_ACCOUNT, UPDATE_ACCOUNT, GET_ADDRESS,SAVE_USER_ADDRESS, UPDATE_ADDRESS } from "../actions/user";
import {  saveUser, saveUserInfos, saveUserAddress, getMessageError } from '../actions/user';

const API_BASE_URL = process.env.REACT_APP_API_URL;

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
            console.log(error);
            store.dispatch(getMessageError("Le compte utilisateur n'a pas pu être créer, merci de remplir tous les champs requis."))
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
          console.log(error.response.data.error);
          store.dispatch(getMessageError(error.response.data.error))
     
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

    case GET_ADDRESS: {
      const token = localStorage.getItem('token');

      axios
        .get(`${API_BASE_URL}/profile/addresses`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserAddress(response.data[0]));
        })
        .catch((error) => {
          console.log(error)
        });
        next(action);
        break;
    }

    case UPDATE_ACCOUNT: {
      const token = localStorage.getItem('token');
      const { user: { first_name, last_name, password, email, phone_number } } = store.getState();

      axios
        .patch(`${API_BASE_URL}/profile`,{first_name, last_name, password, email, phone_number}, { 
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(getMessageError(response.data.message))
        })
        .catch((error) => {
          console.log(error)
          store.dispatch(getMessageError(error.response.data.error))
        });
        next(action);
        break;
    }

    case UPDATE_ADDRESS: {
      const token = localStorage.getItem('token');
      const { user: { address, zip_code ,city, country, id }} = store.getState()
      // const id = useSelector((state)=> state.user.userAddress.id)
      axios
        .patch(`${API_BASE_URL}/profile/address${id}`, {address,zip_code,city,country,id} ,{
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(getMessageError("Votre adresse a bien été modifiée"))
        })
        .catch((error) => {
          console.log(error)
          store.dispatch(getMessageError(error.response.data.error))
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
