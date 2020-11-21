import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.jsx';
import reportWebVitals from './reportWebVitals';
import Axios from 'axios';

// Axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';
// Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
