import Axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './AuthTypes';

export const loginRequest = bool => {
  return {
    type: LOGIN_REQUEST,
    isLoading: bool,
  };
};

export const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    token: token,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

/**
 *
 * @param {} data
 * данные из компонента Login.jsx полученные из state и прокинутые в action login
 * this.props.login(this.state)
 *
 * Далее, если запрос успешный, то мы диспачим action loginSuccess и передаем в него token,
 * который пришел с сервера (res.data.data.token)
 *
 * он попопадает в параметр loginSuccess (loginSuccess = (token)) и записывается в
 * payload этого же action в свойство token
 */
const login = data => dispatch => {
  dispatch(loginRequest(true));
  Axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/v1/auth',
    data: {
      email: data.email,
      password: data.password,
    },
  })
    .then(res => {
      dispatch(loginSuccess(res.data.data.token));
    })
    .catch(err => {});
};

export default login;
