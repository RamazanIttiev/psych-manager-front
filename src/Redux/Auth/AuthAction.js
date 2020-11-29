import { createAction } from '@reduxjs/toolkit';
import Axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './authTypes';

/**
 *
 * @param {} data
 * данные из компонента Login.jsx полученные из state и прокинутые в action login
 * this.props.login(this.state)
 *
 * Далее, если запрос успешный, то мы диспачим action loginSuccess и передаем в него token,
 * который пришел с сервера (res.data.data.token)
 *
 * он попопадает в payload LOGIN_SUCCESS и в редьюсере идет в state
 */
const login = data => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  Axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/v1/auth',
    data: {
      email: data.email,
      password: data.password,
    },
  })
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.data.token });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

export default login;
