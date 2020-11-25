import React, { Component, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authThunk, { loginData } from '../../Redux/Auth/AuthAction.js';
import loginReducer from '../../Redux/Auth/AuthReducer.js';
import { LOGIN_DATA } from '../../Redux/Auth/AuthTypes.js';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.loginReducer(this.state);
  };

  render() {
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
              <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })}
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
                    className="form-control"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
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
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={this.props.isLoading}
                    >
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
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    email: state.email,
    password: state.password,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authThunk: () => dispatch(authThunk()),
  };
};
// Если так прописываю, запрос приходит,
// но данные из input не получается передать в data(который в authThunk)
export default connect(mapStateToProps, mapDispatchToProps)(Login);

// А если так прописываю, то в paylod приходят данные которые прописаны в форме,
// но не прихожит запрос

// export default connect(
//   state => ({
//     isLoading: state.isLoading,
//     email: state.email,
//     password: state.password,
//     error: state.error,
//   }),
//   dispatch => ({
//     loginReducer: (email, password) => {
//       const payload = {
//         email,
//         password,
//       };
//       dispatch({ type: LOGIN_DATA, payload });
//     },
//   }),
// )(Login);
