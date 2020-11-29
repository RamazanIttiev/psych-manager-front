import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../Auth/AuthReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(loginReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
