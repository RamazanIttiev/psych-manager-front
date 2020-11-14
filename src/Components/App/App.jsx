import React from 'react';
import './App';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Session from '../Session/Session.jsx';
import Home from '../Home/Home.jsx';
import Layout from '../Layout/Layout';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route exact path='/register'>
          <Register/>
        </Route>
        <Route exact path='/session'>
          <Session/>
        </Route>
        <Route exact path='/home'>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
