
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';

import Routess from './Routes/routes';
function App() {
  return (
   <>
    <Navbar/>
    
    <Routess/>
   </>
  );
}

export default App;
