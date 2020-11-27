import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Sessions from '../Sessions/Sessions.jsx';
import Clients from '../Clients/Clients.jsx';
import Home from '../Home/Home.jsx';

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/sessions">
          <Sessions />
        </Route>
        <Route exact path="/clients">
          <Clients />
        </Route>
      </Switch>
    );
  }
}

export default Router;
