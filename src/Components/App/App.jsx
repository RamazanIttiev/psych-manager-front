import React from 'react';
import './App';
import { BrowserRouter, Router } from 'react-router-dom';
import RootRouter from '../RootRouter/RootRouter';
import { Provider } from 'react-redux';
import store from '../../Redux/Store/Store.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
