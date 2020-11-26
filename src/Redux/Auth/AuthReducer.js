import { loginRequest, loginSuccess, loginFailure } from './AuthAction';

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
    case loginRequest:
      return {
        ...state,
        isLoading: true,
      };

    /*
     * в условии редьюсера мы берем старый state (...state) и обновляем нужные нам данные.
     *
     * action.token - это наш token c сервера
     */
    case loginSuccess:
      const { token } = action.token;
      return (state = {
        ...state,
        isLoading: false,
        loggedIn: true,
        token: token,
      });
    case loginFailure:
      return {
        ...state,
        error: 'Error',
      };
    default:
      return state;
  }
};

export default loginReducer;
