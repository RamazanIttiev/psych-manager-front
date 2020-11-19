import React from 'react';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';

class LoggedIN extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SideBar />
        <div class="content-wrapper">
          <h1>Wellcome</h1>
        </div>
      </>
    );
  }
}

export default LoggedIN;
