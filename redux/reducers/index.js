import AuthReducer from './AuthReducer';
import MapReducer from './MapReducer';
import { combineReducers } from 'redux';

/* combining all reducers */
const allReducers = combineReducers({
    Auth : AuthReducer,
    Map : MapReducer
});

export default allReducers;