import React from 'react';
import './App';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Session from '../Sessions/Sessions.jsx';
import Clients from '../Clients/Clients.jsx';
import Home from '../Home/Home.jsx';
import Session from '../Session/Session.jsx';
import Clients from '../Clients/Clients.jsx';
import Home from '../Home/Home.jsx';
import Mailform from '../Mailform/Mailform.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
            <Session />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Mailform">
            <Mailform />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
