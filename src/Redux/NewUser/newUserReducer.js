import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_CONNECTION,
  USER_GENDER,
  USERS_LIST,
  USERS_LIST_EMPTY,
  CURRENT_USER,
} from './newUserTypes';

const initialState = {
  isLoading: false,
  gender: [],
  connection_type: [],
  users: [],
  isUserAdded: false,
  current_user: {},
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
        isUserAdded: true,
      };
    case USER_CONNECTION:
      return {
        ...state,
        connection_type: action.payload,
      };
    case USER_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case USERS_LIST:
      return {
        ...state,
        users: action.payload,
      };
    case USERS_LIST_EMPTY:
      return {
        ...state,
        users: action.payload,
      };
    case CURRENT_USER:
      return {
        ...state,
        current_user: action.payload,
      };
    default:
      return state;
  }
};
