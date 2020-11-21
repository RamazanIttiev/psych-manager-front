import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../Reducer/AuthReducer';

const store = configureStore({
  reducer: {
    authStore: authSlice,
  },
});

export default store;
