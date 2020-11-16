import React from 'react';
import Header from '../Header/Header.jsx';
import Sidebar from '../SideBar/Sidebar.jsx';
import Footer from '../Footer/Footer.jsx';
import Axios from 'axios';

class LoggedIN extends React.Component {
  state = {};

  // componentDidMount() {
  //   Axios.get('auth')
  //     .then(res => {
  //       this.setState({
  //         auth: res.data,
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <div class="content-wrapper">
          <h1>Not logged in</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default LoggedIN;
