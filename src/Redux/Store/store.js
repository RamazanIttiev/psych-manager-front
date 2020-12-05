import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../Auth/authReducer.js';
import { newUserReducer } from '../NewUser/newUserReducer';

export const rootReducer = combineReducers({
  authReducer,
  newUserReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
