import Axios from 'axios';
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_CONNECTION } from './newUserTypes';

export const addUser = data => (dispatch, getState) => {
  dispatch({ type: USER_REQUEST });
  Axios({
    method: 'post',
    headers: {
      'X-API-KEY': getState().authReducer.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: 'http://127.0.0.1:8000/api/v1/users',
    data: {
      name: data.name,
      gender: data.gender,
      email: data.email,
      phone: data.phone,
      connection_type: 1,
      password: '123456',
      connection_type_string: 'string',
      role: 1,
    },
  })
    .then(res => {
      dispatch({ type: USER_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: USER_FAILURE });
    });
};

export const getConnectionType = data => (dispatch, getState) => {
  Axios({
    method: 'get',
    headers: {
      'X-API-KEY': getState().authReducer.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: 'http://127.0.0.1:8000/api/v1/static-data/get-connection-types',
  })
    .then(res => {
      const myArr = res.data.data.connection_types;
      const newArr = myArr.map(item => {
        return item.name;
      });
      dispatch({ type: USER_CONNECTION, payload: newArr });
    })
    .catch(err => {});
};
