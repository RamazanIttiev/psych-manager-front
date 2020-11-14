import React from 'react'

class Sidebar extends React.Component {
  render() {
    return (
      <>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" />
              </div>
              <div className="info">
                <a  className="d-block">{this.props.firstName} {this.props.secondName}</a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <a  className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                      Sessions
                  </p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </>
    )
  }
}

export default Sidebar