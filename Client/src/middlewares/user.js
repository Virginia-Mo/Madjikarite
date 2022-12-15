import axios from "axios";
import { SIGN_UP_USER } from "../actions/user";
import {  saveUser } from '../actions/user';

const API_BASE_URL = 'https://madjikarite.onrender.com';

const usersAPI = (store) => (next) => (action) => {

    switch (action.type) {

    case SIGN_UP_USER:
        const { user : { civility,first_name, last_name, password, email, address, zip_code, city, country, phone_number }} = store.getState();
       
       
        
    axios 
        .post(`${API_BASE_URL}/signup`, {
          civility,
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
            // navigate('/');
            store.dispatch(saveUser(response.data));
            if (response.status === 200) {
              window.location.href = '/';
            }
        
        })
        .catch((error) => {
            console.log(error.statusText);
        });
           next(action);
        break;
        
    // case LOGIN: {
    // // on récupère `state` grâce à `store.getState()`
    // //    const state = store.getState();
    // // destructuring sur 2 niveaux
    // //  - `state.user` → on décompose `state` pour assigner à `user`
    // //      const { user } = store.getState();
    // //  - on renomme `user` avec les `:`
    // //      const { user: nouveauNom } = store.getState();
    // //  - on décompose `user` pour assigner à `email` et `password`
    // const { user: { email, password } } = store.getState();

    // axios
    //   .post(`${API_BASE_URL}/login`, {
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     // console.log(response.data);
    //     store.dispatch(saveUser(response.data));
    //   })
    //   .catch((error) => {
    //     // @TODO : manage errors → state.user.loading + message + …
    //     console.log(error);
    //   });
    // next(action);
    // break;
    // }

  default:
    next(action);
    }
}
;

export default usersAPI;
