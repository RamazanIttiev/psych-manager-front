import React from 'react';
import './App';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from '../RootRouter/RootRouter.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RootRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
