import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Redux store creation */
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;