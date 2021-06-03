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
} from '../actions/types';

const initialState = {
    loading: false,
    loggedIn: false,
    currentUser:'',
    response: '',
    error: '',
    showRegSuccess:false,
    showRegFail:false,
    showLoginFail:false,
}

const AuthReducer = (state = initialState, action) =>{

    switch (action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loading: true,
                showLoginFail:false,
                
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                response: action.payload,
                currentUser: action.payload.User,
                loggedIn: true,
                error: ''
            }

        case LOGIN_FAILURE:
            return{
                ...state,
                loading: false,
                response: '',
                error: action.payload,
                showLoginFail: true,
            }
        case LOGOUT_REQUEST:
            return{
                ...state,
                loading: true
            }

        case LOGOUT_SUCCESS:
            return{
                ...state,
                loggedIn: false,
                loading: false,
                currentUser:'',
                response: '',
                error: ''
            }

        case LOGOUT_FAILURE:
            return{
                ...state,
                loading: false,
                response: '',
                error: action.payload
            }
        
        case REGISTER_REQUEST:
            return{
                ...state,
                loading: true,
                showRegSuccess:false,
                showRegFail:false,
            }

        case REGISTER_SUCCESS:
            return{
                ...state,
                loading: false,
                response: action.payload,
                error: '',
                showRegSuccess:true,
            }

        case REGISTER_FAILURE:
            return{
                ...state,
                loading: false,
                response: '',
                error: action.payload,
                showRegFail: true,
            }

        case REGISTER_SUCCESS_MODAL_FALSE:
            return{
                ...state,
                showRegSuccess: false,
            }
        case REGISTER_FAIL_MODAL_FALSE:
            return{
                ...state,
                showRegFail: false,
            }

        case LOGIN_FAIL_MODAL_FALSE:
            return{
                ...state,
                showLoginFail: false,
            }

        default:
            return state
    }
}

export default AuthReducer