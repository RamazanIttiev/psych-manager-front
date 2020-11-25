import { loginRequest, loginSuccess, loginFailure, loginData } from './AuthAction';

const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginData:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default loginReducer;

// case loginRequest:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case loginSuccess:
//       return {
//         ...state,
//         isLoading: false,
//       };
//     case loginFailure:
//       return {
//         ...state,
//         error: 'Error',
//       };
