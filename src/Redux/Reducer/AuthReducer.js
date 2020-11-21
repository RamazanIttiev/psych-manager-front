import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: [
    {
      email: 'admin@yandex.ru',
      password: 123456,
    },
  ],
  reducers: {
    create: {
      reducer(state) {
        Axios.post('auth', state)
          .then(res => {
            console.log('success');
          })
          .catch(err => {
            console.log('error');
          });
      },
    },
  },
});

const { actions } = authSlice;

export const { create } = actions;

export default authSlice;
