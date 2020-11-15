import React, { Component } from 'react';
import Axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password,
    }

    Axios.post('auth', data)
      .then(
        res => {
          localStorage.setItem('token', res.data.token)
        }
    ).catch(
      err => {
        console.log('error')
        
      }
    )
  }
  render() {
    return ( 
      <div class="login-page">   
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html"><b>Wellcome</b></a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start</p>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email"
                      onChange={e => this.email = e.target.value}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password"
                      onChange={e => this.password = e.target.value}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                 {/* <div className="input-group mb-3">
                 <input type="password" className="form-control" placeholder="Retype password"
                      onChange={e => this.confirmation = e.target.value}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Log In</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <p className="mb-0">
                <Link to='/register' className="text-center">Register a new membership</Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        </div>
    )
  }
}

export default Login