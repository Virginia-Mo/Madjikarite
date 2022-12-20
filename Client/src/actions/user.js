export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const USER_SAVE = 'USER_SAVE';

// Action to change the value of an input
export function changeInputValue(key, value) {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: {
      key,
      value,
    },
  };
}

//Action to create a new user
export function signUpUser() {
  return {
    type: SIGN_UP_USER,
  };
}

// Action to log in
export function login() {
  return {
    type: LOGIN,
  };
}

// Action to log out
export function logout() {
  return {
    type: LOGOUT,
  };
}

// Action to save user
export function saveUser(user) {
  return {
    type: USER_SAVE,
    payload: { user },
  };
}
