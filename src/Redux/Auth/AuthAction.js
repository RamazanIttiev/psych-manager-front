import Axios from 'axios';
import { LOGIN_DATA, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './AuthTypes';

export const loginData = () => {
  return {
    type: LOGIN_DATA,
    payload: {},
  };
};

const authThunk = state => (dispatch, getState) => {
  Axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/v1/auth',
    data: {
      email: 'admin@yandex.ru',
      password: '123456',
    },
  })
    .then(res => {})
    .catch(err => {});
};

export default authThunk;

// export const loginRequest = () => {
//   return {
//     type: LOGIN_REQUEST,
//   };
// };

// export const loginSuccess = () => {
//   return {
//     type: LOGIN_SUCCESS,
//   };
// };

// export const loginFailure = () => {
//   return {
//     type: LOGIN_FAILURE,
//   };
// };
