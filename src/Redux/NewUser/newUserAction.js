import Axios from 'axios';
import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_CONNECTION,
  USERS_LIST,
  USERS_LIST_FILTER,
} from './newUserTypes';

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
      name: data.newUser.name,
      email: data.newUser.email,
      phone: data.newUser.phone,
      role: 0,
      gender: 0,
      connection_type: 1,
      connection_type_string: data.newUser.connection_type_string,
    },
  })
    .then(res => {
      dispatch({ type: USER_SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: USER_FAILURE });
    });
};

export const getUsers = data => (dispatch, getState) => {
  Axios({
    method: 'get',
    headers: {
      'X-API-KEY': getState().authReducer.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: 'http://127.0.0.1:8000/api/v1/users',
    params: {
      filters: {
        pagination: {
          page: 1,
          limit: 15,
        },
        sort: {
          field: 'created_at',
          order: 0,
        },
        fields: {
          id: data.filters.fields.id,
          name: data.filters.fields.name,
          email: data.filters.fields.email,
          phone: data.filters.fields.phone,
          connection_type: data.filters.fields.connection_type,
          session_date: data.filters.fields.session_date,
        },
      },
    },
  })
    .then(res => {
      console.log('from action', data.filters.fields.phone);
      dispatch({ type: USERS_LIST, payload: res.data.data.users });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getConnectionType = () => (dispatch, getState) => {
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
      dispatch({ type: USER_CONNECTION, payload: myArr });
    })
    .catch(err => {});
};
