import React from 'react';
import Header from '../Header/Header.jsx';
import Sidebar from '../SideBar/Sidebar.jsx';
import Footer from '../Footer/Footer.jsx';

class LoggedIN extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div class="content-wrapper">
                    <h1>Welcome</h1>
                </div>
                <Footer />
            </>
        );
    }
}
export default LoggedIN;
