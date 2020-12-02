import Axios from 'axios';
import {
  NEW_CLIENT_FAILURE,
  NEW_CLIENT_REQUEST,
  NEW_CLIENT_SUCCESS,
  ADD_CONNECTION_TYPE,
} from './newClientTypes';

export const addNewClient = data => (dispatch, getState) => {
  dispatch({ type: NEW_CLIENT_REQUEST });
  Axios({
    method: 'get',
    headers: {
      authorization: getState().authReducer.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: 'http://127.0.0.1:8000/api/users',
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
      dispatch({ type: NEW_CLIENT_SUCCESS, payload: { data } });
    })
    .catch(err => {
      dispatch({ type: NEW_CLIENT_FAILURE });
      console.log(getState().newClientReducer);
    });
};

export const connection_type = data => (dispatch, getState) => {
  Axios({
    method: 'get',
    headers: {
      authorization: getState().authReducer.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: 'http://127.0.0.1:8000/api/v1/static-data/get-connection-types',
    data: {
      connection_types: 1,
      connection_type_string: 'string',
    },
  })
    .then(res => {
      let connection_option = res.data.data.connection_types;

      dispatch({ type: ADD_CONNECTION_TYPE, payload: connection_option });
      console.log(getState().newClientReducer);
    })
    .catch(err => {
      console.log(data);
    });
};
