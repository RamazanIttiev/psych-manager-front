import React from 'react';
import './App';
import { BrowserRouter, Router } from 'react-router-dom';
import RootRouter from '../RootRouter/RootRouter';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    );
  }
}

export default App;
