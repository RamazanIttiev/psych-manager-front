import Axios from 'axios';

const addNewUser = data => dispatch => {
  Axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/v1/users',
    data: {
      id: 'string',
      name: 'string',
      email: 'admin@yandex.com',
      phone: '0',
      connection_type: 0,
      role: 1,
      connection_type_string: 'string',
    },
  })
    .then(res => {
      console.log('Successful' + res.data);
    })
    .catch(err => {});
};

export default addNewUser;
