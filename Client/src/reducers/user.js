import { CHANGE_INPUT_VALUE, USER_SAVE } from '../actions/user';

export const initialState = { 
  quantity : 0,
  civility:"",
  first_name: "", 
  last_name: "", 
  password: "", 
  passwordConfirmation: "",
  email: "", 
  address: "", 
  zip_code: "",
  city: "",
  country: "",  
  phone_number: 0,
  logged: false,
  token : ""
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action; // value = { name: 'email', value: '

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
        token: payload.user.token
      };
      
    default:
      return state;
  }
}

export default reducer;
