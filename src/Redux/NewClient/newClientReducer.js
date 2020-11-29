import { LOGOUT } from '../Auth/authTypes';
import { NEW_CLIENT_POST, NEW_CLIENT_SUCCESS } from './newClientTypes';

const initialState = {
  isLoading: false,
  id: 'string',
  name: 'string',
  email: 'string',
  connection_type: 0,
  connection_type_string: 'string',
};

export const newClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CLIENT_POST:
      return {
        ...state,
        isLoading: true,
      };
    case NEW_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
