import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_CONNECTION } from './newUserTypes';

const initialState = {
  isLoading: false,
  name: '',
  gender: '',
  email: '',
  phone: '',
  password: '',
  role: '',
  connection_type: '',
};

export const newUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.payload.data.name,
        gender: action.payload.data.gender,
        email: action.payload.data.email,
        phone: action.payload.data.phone,
        password: action.payload.data.password,
        role: action.payload.data.role,
        connection_type: action.payload.data.connection_type,
      };
    case USER_FAILURE:
      return {
        ...state,
      };
    case USER_CONNECTION:
      return {
        ...state,
        connection_type: action.payload,
      };
    default:
      return state;
  }
};
