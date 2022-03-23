import React from 'react';
//import Login from '../src/pages/Login'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
function App() {
   return (
        <BrowserRouter>
          <div className='App'>

          <Routes />
          </div>
        </BrowserRouter>
      );
}

export default App;
