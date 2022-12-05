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
