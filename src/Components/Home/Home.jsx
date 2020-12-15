import React from 'react';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <div class="content-wrapper">
          <h1>Welcome</h1>
        </div>
      </>
    );
  }
}

export default Home;
