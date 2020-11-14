import React from 'react'
import Header from '../Header/Header.jsx'
import Sidebar from '../SideBar/Sidebar.jsx'
import Footer from '../Footer/Footer.jsx'
import Content from '../Content/Content.jsx';
import Home from '../Home/Home.jsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar firstName={'Ramazan'} secondName={'Ittiev'} />
      <Content/>
      <Footer />
    </div>
  );
};

export default Layout