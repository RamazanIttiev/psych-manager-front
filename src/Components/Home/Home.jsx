import React from 'react';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Footer from '../Footer/Footer.jsx';

class LoggedIN extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SideBar />
        <div class="content-wrapper">
          <h1>Wellcome</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default LoggedIN;
