import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './AuthTypes';

const initialState = {
  isLoading: false,
  email: '',
  password: '',
  error: '',
  loggedIn: false,
  token: null,
};

const loginReducer = (state = initialState, action) => {
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
        loggedIn: true,
        token: action.payload,
      });
    case LOGIN_FAILURE:
      return {
        ...state,
        error: 'Error',
      };
    default:
      return state;
  }
};

export default loginReducer;
