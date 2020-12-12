import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_CONNECTION,
  USERS_LIST,
  USERS_LIST_FILTER,
} from './newUserTypes';

const initialState = {
  isLoading: false,
  name: '',
  gender: '',
  email: '',
  phone: '',
  role: '',
  connection_type: [],
  connection_type_string: '',
  users: [],
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
        name: action.payload.newUser.name,
        gender: action.payload.newUser.gender,
        email: action.payload.newUser.email,
        phone: action.payload.newUser.phone,
        role: action.payload.newUser.role,
        connection_type: action.payload.newUser.connection_type,
        connection_type_string: action.payload.newUser.connection_type_string,
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
    case USERS_LIST:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
