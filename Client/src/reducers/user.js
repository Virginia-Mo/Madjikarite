import { CHANGE_INPUT_VALUE, USER_SAVE } from '../actions/user';

export const initialState = {
  email: '',
  password: '', 

  logged: false,

};

const reducer = (state = initialState, action = {}) => {
  const { type, value } = action; // value = { name: 'email', value: '

  switch (type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [payload.key]: payload.value,
      };

    case USER_SAVE:
      return {
        ...state,
        logged: true,
      };
      
    default:
      return state;
  }
}

export default reducer;
