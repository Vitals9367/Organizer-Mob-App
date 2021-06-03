import AuthReducer from './authReducer';
import MapReducer from './mapReducer';
import { combineReducers } from 'redux';

/* combining all reducers */
const allReducers = combineReducers({
    Auth : AuthReducer,
    Map : MapReducer
});

export default allReducers;