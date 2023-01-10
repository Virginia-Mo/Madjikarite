import { CHANGE_INPUT_VALUE, USER_SAVE, LOGOUT, DELETE_ACCOUNT, SAVE_USER_INFOS, SAVE_USER_ADDRESS, GET_MESSAGE_ERROR, RESET_MESSAGE_ERROR } from '../actions/user';

const token = localStorage.getItem("token");
const logged = localStorage.getItem("logged")

export const initialState = { 
  quantity: 0 ,
  first_name: "", 
  last_name: "", 
  password: "", 
  passwordConfirmation: "",
  email: "", 
  address: "", 
  zip_code: "",
  city: "",
  country: "",  
  phone_number: null,
  userInfos : [],
  userAddress:"",
  message : "",
  messageError : "",
  // logged: false,
  // token : token
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action; 

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

    case DELETE_ACCOUNT:
      return {
        ...state,
      }
      
    case GET_MESSAGE_ERROR:
      return {
        ...state,
       messageError : payload.messageError
      }  
    case RESET_MESSAGE_ERROR:
        return {
          ...state,
         messageError : " ",
        }  
        
    default:
      return state;
  }
}

export default reducer;
