import React, { Component } from 'react'
import Layout from '../Layout/Layout.jsx'
import Home from '../Home/Home.jsx'

class Content extends Component {
  render() {
    return (
        <div className="content-wrapper">
          <Home />
        </div>
    )
  }
}

export default Content