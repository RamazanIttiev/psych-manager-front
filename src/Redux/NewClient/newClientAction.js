import Axios from 'axios';
import { NEW_CLIENT_POST, NEW_CLIENT_SUCCESS } from './newClientTypes';

export const addNewClient = data => dispatch => {
  dispatch({ type: NEW_CLIENT_POST });
  Axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/v1/users',
    data: {
      id: 1,
      name: 'string',
      email: 'admin@yandex.com',
      phone: '0',
      connection_type: 0,
      role: 1,
      connection_type_string: 'string',
    },
  })
    .then(res => {
      dispatch({ type: NEW_CLIENT_SUCCESS });
    })
    .catch(err => {
      console.log('Error  ' + err.data);
    });
};
