import { CHANGE_INPUT_VALUE, USER_SAVE, LOGOUT, DELETE_ACCOUNT, SAVE_USER_INFOS, SAVE_USER_ADDRESS } from '../actions/user';

const token = localStorage.getItem("token");
const logged = localStorage.getItem("logged")

export const initialState = { 
  quantity : 0,
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
  userInfos : [],
  userAddress:"",
  message : "",
  // logged: false,
  // token : token
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
        // token: payload.user.token
      };

    case SAVE_USER_INFOS : 
    return {
      ...state,
      userInfos : payload.user
    }

    case SAVE_USER_ADDRESS : 
    return {
      ...state,
      userAddress : payload.user
    }

    // case LOGOUT:
    //   return {
    //     ...state,
    //     logged: false,
    //   }
    
    case DELETE_ACCOUNT:
      return {
        ...state,
      }
      
    default:
      return state;
  }
}

export default reducer;
