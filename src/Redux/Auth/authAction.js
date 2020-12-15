import Axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_TOKEN } from './authTypes';

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
export const login = data => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  Axios({
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    url: 'http://127.0.0.1:8000/api/v1/auth',
    data: {
      email: data.email,
      password: data.password,
    },
  })
    .then(res => {
      localStorage.setItem('token', res.data.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: localStorage.token });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.setItem('token', null);
};

export const setToken = () => dispatch => {
  const token = localStorage.getItem('token');
  dispatch({ type: SET_TOKEN, payload: token });
};
