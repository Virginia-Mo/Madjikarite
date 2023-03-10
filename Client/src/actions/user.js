export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const USER_SAVE = 'USER_SAVE';
export const GET_MESSAGE_ERROR = 'GET_MESSAGE_ERROR'
export const RESET_MESSAGE_ERROR = 'RESET_MESSAGE_ERROR'
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


export function getMessageError(messageError) {
  return {
    type: GET_MESSAGE_ERROR,
    payload : {messageError}
  };
}

export function resetMessageError() {
  return {
    type: RESET_MESSAGE_ERROR,
  };
}

// Action to save user
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

export const SAVE_USER_ADDRESS = 'SAVE_USER_ADDRESS';

export function saveUserAddress(user) {
  return {
    type: SAVE_USER_ADDRESS,
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

export const GET_ADDRESS = 'GET_ADDRESS';

export function getAddress() {
  return {
    type: GET_ADDRESS,
  };
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

export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

export function updateAddress(user) {
  return {
    type: UPDATE_ADDRESS,
    payload: { user },
  };
}

