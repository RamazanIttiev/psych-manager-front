import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.jsx';
import reportWebVitals from './reportWebVitals';
import store from './Redux/index.js';
import { Provider } from 'react-redux';
import { setToken } from './Redux/Auth/authAction';

store.dispatch(setToken());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
