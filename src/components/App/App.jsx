import React from 'react';
import Header from '../Header/Header';
import Session from '../Session/Session';
import SessionTable from '../SessionTable/SessionTable';
import SideBar from '../SideBar/SideBar';

const App = () => {
  return (
    <div className="wrapper skin-blue layout-top-nav">
      <Header />
      <SideBar />
      <div className="content-wrapper"  style={{marginTop: '30px'}}>
        <section className="content">
            <div className="container-fluid">
                <Session />
                <SessionTable />
            </div>
        </section>
      </div>
    </div>
  );
};

export default App;
