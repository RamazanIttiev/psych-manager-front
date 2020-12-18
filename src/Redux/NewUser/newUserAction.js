import Axios from 'axios';
import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_CONNECTION,
  USER_GENDER,
  USERS_LIST,
  USERS_LIST_EMPTY,
  CURRENT_USER,
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
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: 0,
      gender: data.gender,
      connection_type: data.connection_type,
    },
  })
    .then(res => {
      dispatch({ type: USER_SUCCESS });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getUsersList = data => (dispatch, getState) => {
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
      dispatch({ type: USERS_LIST, payload: res.data.data.users });
    })
    .catch(err => {
      dispatch({ type: USERS_LIST_EMPTY, payload: [] });
    });
};

export const getUser = data => (dispatch, getState) => {
  Axios({
    method: 'get',
    headers: {
      'X-API-KEY': getState().authReducer.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: `http://127.0.0.1:8000/api/v1/users/${data.id}`,
  })
    .then(res => {
      dispatch({ type: CURRENT_USER, payload: res.data.data.user });
      console.log(res.data);
    })
    .catch(err => {});
};

export const editUser = data => (dispatch, getState) => {
  Axios({
    method: 'put',
    headers: {
      'X-API-KEY': getState().authReducer.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: 'http://127.0.0.1:8000/api/v1/users',
    userData: {
      id: data.filters.fields.id,
      name: data.filters.fields.name,
      email: data.filters.fields.email,
      phone: data.filters.fields.phone,
      connection_type: data.filters.fields.connection_type,
      session_date: data.filters.fields.session_date,
    },
  })
    .then(res => {
      dispatch({ type: USERS_LIST, payload: res.data.data.users });
    })
    .catch(err => {
      dispatch({ type: USERS_LIST_EMPTY, payload: [] });
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
      dispatch({ type: USER_CONNECTION, payload: res.data.data.connection_types });
    })
    .catch(err => {});
};

export const getGender = () => (dispatch, getState) => {
  Axios({
    method: 'get',
    headers: {
      'X-API-KEY': getState().authReducer.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: 'http://127.0.0.1:8000/api/v1/static-data/get-gender-list',
  })
    .then(res => {
      dispatch({ type: USER_GENDER, payload: res.data.data.gender_list });
    })
    .catch(err => {});
};
