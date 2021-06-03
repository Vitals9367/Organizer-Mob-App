import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_SUCCESS_MODAL_FALSE,
    REGISTER_FAIL_MODAL_FALSE,
    LOGIN_FAIL_MODAL_FALSE,
} from './types';
import {getValueFromStore, saveToStore, deleteFromStore} from '../../utils/secureStore';

export const LogoutAction = () =>{

    return (dispatch) => {
      dispatch(LogoutRequest());
      axios
          .post("https://orgmobapi.herokuapp.com/auth/logout")
          .then(res => {
              deleteFromStore('token');
              dispatch(LogoutSuccess());
          })
          .catch(err => {
              dispatch(LogoutFailure(err.response.data));
          });
    }
}
export const LoginAction = (user) =>{
    return (dispatch) => {
        dispatch(LoginRequest());
        axios
            .post("https://orgmobapi.herokuapp.com/auth/login",user)
            .then(res => {
                saveToStore('token',res.data.Authorization);
                axios.defaults.headers.common['Authorization'] = res.data.Authorization;
                dispatch(LoginSuccess(res.data));
            })
            .catch(err => {
                dispatch(LoginFailure(err.response.data));
            });
    }
}

export const RegisterAction = (user) =>{
    return (dispatch) => {
        dispatch(RegisterRequest());
        axios
            .post("https://orgmobapi.herokuapp.com/user/",user)
            .then(res => {
                //SecureStore.setItemAsync('access_token',res.data.accessToken);
                //SecureStore.setItemAsync('refresh_token',res.data.refreshToken);
                dispatch(RegisterSuccess(res.data));
            })
            .catch(err => {
                dispatch(RegisterFailure(err.response.data));
            });
    }
}

export const LoginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const LoginSuccess = tokens => {
  return {
    type: LOGIN_SUCCESS,
    payload: tokens
  }
}

export const LoginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

export const LogoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
}
export const LogoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
}
export const LogoutFailure = error => {
  return {
    type: LOGOUT_FAILURE,
    payload: error
  }
}

export const RegisterRequest = () => {
  return {
    type: REGISTER_REQUEST
  }
}
export const RegisterSuccess = (response) => {
  return {
    type: REGISTER_SUCCESS,
    payload: response
  }
}
export const RegisterFailure = error => {
  return {
    type: REGISTER_FAILURE,
    payload: error
  }
}
export const LoginFailModalFalse = () => {
  return {
    type: LOGIN_FAIL_MODAL_FALSE,
  }
}
export const RegisterSuccessModalFalse = () => {
  return {
    type: REGISTER_SUCCESS_MODAL_FALSE,
  }
}
export const RegisterFailModalFalse = () => {
  return {
    type: REGISTER_FAIL_MODAL_FALSE,
  }
}