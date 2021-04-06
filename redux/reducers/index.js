import AuthReducer from './AuthReducer';
import { combineReducers } from 'redux';

/* combining all reducers */
const allReducers = combineReducers({
    Auth : AuthReducer
});

export default allReducers;