// Action pour modifier la valeur du champ
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export function changeInputValue(key, value) {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: {
      key,
      value,
    },
  };
}

//Action pour créer un compte 
export const SIGN_UP_USER = 'SIGN_UP_USER';

export function signUpUser() {
  return {
    type: SIGN_UP_USER,
  };
}

// Action pour se connecter
export const LOGIN = 'LOGIN';

export function login() {
  return {
    type: LOGIN,
  };
}

// // Action pour se déconnecter
// export const LOGOUT = 'LOGOUT';

// export function logout() {
//   return {
//     type: LOGOUT,
//   };
// }

// Action pour mémoriser/sauvegarder l'utilisateur
export const USER_SAVE = 'USER_SAVE';

export function saveUser(user) {
  return {
    type: USER_SAVE,
    payload: { user },
  };
}
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';

export function saveUserInfos(user) {
  return {
    type: SAVE_USER_INFOS,
    payload: { user },
  };
}

export const GET_ACCOUNT = 'GET_ACCOUNT';

export function getAccount(user) {
  return {
    type: GET_ACCOUNT,
    payload: { user },
  }
}

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export function deleteAccount(user) {
  return {
    type: DELETE_ACCOUNT,
    payload: { user },
  };
}

export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

export function updateAccount(user) {
  return {
    type: UPDATE_ACCOUNT, 
    payload: { user },
  };
}
