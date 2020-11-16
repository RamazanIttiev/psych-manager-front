import React from 'react';
import './App';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Session from '../Session/Session.jsx';
import LoggedIN from '../LoggedIN/LoggedIN.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/sessions">
          <Session />
        </Route>
        <Route exact path="/patients">
          <Session />
        </Route>
        <Route exact path="/home">
          <LoggedIN />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
