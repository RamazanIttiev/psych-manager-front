import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../Redux/Auth/authAction';

const Header = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logout());
  };
  return (
    <>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" role="button">
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item">
            <NavLink to="/login">
              <i className="nav-link nav-icon fa fa-sign-out-alt" />
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </>
  );
};

export default Header;
