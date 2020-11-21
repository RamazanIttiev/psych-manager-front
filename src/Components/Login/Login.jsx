import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../../Redux/Reducer/AuthReducer.js';

const Login = () => {
  const dispatch = useDispatch();
  const authStore = useSelector(state => state.authStore);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(create());
  };

  return (
    <div class="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Wellcome</b>
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start</p>
            <form onSubmit={e => onSubmit(e)}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  // onChange={this.onChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  // onChange={this.onChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Log In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mb-0">
              <NavLink to="/register" className="text-center">
                Register a new membership
              </NavLink>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
};

export default Login;

// handleSubmit = e => {
//   e.preventDefault();

//   const data = {
//     email: this.email,
//     password: this.password,
//   };

//   Axios.post('auth', data)
//     .then(res => {
//       localStorage.setItem('token', res.data.token);

//       this.setState({ auth: true });
//     })
//     .catch(err => {
//       console.log('error');
//     });
// };

// onChange = e => {
//   this.setState({
//     [e.target.name]: e.target.value,
//   });
// };

// if (this.state.auth) {
//   return <Redirect to="/home" />;
// }
