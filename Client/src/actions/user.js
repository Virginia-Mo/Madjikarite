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

// Action pour se connecter
export const LOGIN = 'LOGIN';

export function login() {
  return {
    type: LOGIN,
  };
}

// Action pour se déconnecter
export const LOGOUT = 'LOGOUT';

export function logout() {
  return {
    type: LOGOUT,
  };
}

// Action pour mémoriser/sauvegarder l'utilisateur
export const USER_SAVE = 'USER_SAVE';

export function saveUser(user) {
  return {
    type: USER_SAVE,
    payload: { user },
  };
}
