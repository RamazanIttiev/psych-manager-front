import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../Redux/Auth/authAction';

class Header extends Component {
  onSubmit = () => {
    this.props.logout();
  };

  render() {
    if (this.props.token === null) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link" data-widget="pushmenu" role="button">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}

            <li className="nav-item">
              <a type="submit" onClick={this.onSubmit}>
                <i className="nav-link nav-icon fa fa-sign-out-alt" />
              </a>
            </li>
          </ul>
        </nav>
        {/* /.navbar */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.authReducer.isLoading,
    token: state.authReducer.token,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
