import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../Auth/AuthReducer.js';
import authThunk from '../Auth/AuthAction.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(loginReducer, composeWithDevTools(applyMiddleware(thunk)));

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(loginReducer, authThunk);

export default store;
