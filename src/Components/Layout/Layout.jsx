import React from 'react'
import Header from '../Header/Header.jsx'
import Sidebar from '../SideBar/Sidebar.jsx'
import Footer from '../Footer/Footer.jsx'

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar firstName={'Ramazan'} secondName={'Ittiev'} />
      <Footer />
    </div>
  );
};

export default Layout