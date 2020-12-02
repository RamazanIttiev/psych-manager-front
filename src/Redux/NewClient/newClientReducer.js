import {
  NEW_CLIENT_REQUEST,
  NEW_CLIENT_SUCCESS,
  NEW_CLIENT_FAILURE,
  ADD_CONNECTION_TYPE,
} from './newClientTypes';

const initialState = {
  isLoading: false,
  name: '',
  gender: '',
  email: '',
  phone: '',
  connection_type: [],
  connection_type_string: '',
};

export const newClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CLIENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case NEW_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.payload.data.name,
        gender: action.payload.data.gender,
        email: action.payload.data.email,
        phone: action.payload.data.phone,
        connection_type: action.payload.data.connection_type,
      };
    case NEW_CLIENT_FAILURE:
      return {
        ...state,
      };
    case ADD_CONNECTION_TYPE:
      return {
        ...state,
        connection_type: action.payload,
      };

    default:
      return state;
  }
};
