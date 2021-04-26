import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/types';

const initialState = {
    loading: false,
    loggedIn: true,
    currentUser:'',
    response: '',
    error: ''
}

const AuthReducer = (state = initialState, action) =>{

    switch (action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loading: true
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
                error: action.payload
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
                loading: true
            }

        case REGISTER_SUCCESS:
            return{
                ...state,
                loading: false,
                response: action.payload,
                error: ''
            }

        case REGISTER_FAILURE:
            return{
                ...state,
                loading: false,
                response: '',
                error: action.payload
            }

        default:
            return state
    }
}

export default AuthReducer