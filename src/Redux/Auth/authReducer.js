import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_TOKEN } from './authTypes';

const initialState = {
  isLoading: false,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    /*
     * в условии редьюсера мы берем старый state (...state) и обновляем нужные нам данные.
     *
     * action.token - это наш token c сервера
     */
    case LOGIN_SUCCESS:
      return (state = {
        ...state,
        isLoading: false,
        token: action.payload,
      });
    case LOGIN_FAILURE:
      return {
        ...state,
        error: 'Error',
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    case SET_TOKEN:
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};
