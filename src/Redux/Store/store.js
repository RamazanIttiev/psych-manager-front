import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, logoutReducer } from '../Auth/authReducer.js';
import { newClientReducer } from '../NewClient/newClientReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  loginReducer,
  logoutReducer,
  newClientReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
