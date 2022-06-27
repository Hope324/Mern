import logo from './logo.svg';
import './App.css';
import Main from './Component/Main'
import LifeCycleComponent from './Component/LifeCycleComponent'
import Card from './Component/Card'
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import Navbar from './Component/Navbar'
import Routess from './Routes/Route';
import FlightContext from './Contexts/FlightContext';
import { Flight } from './Contexts/FlightContext'

function App() {
  const { name } = useContext(Flight)

  return (
    <>
      {/* <FlightContext> */}
        <Navbar />
        <Routess />
        {name}
      {/* </FlightContext> */}
      
    </>
  );
}

export default App;

// q1 how to share data amoung sibling compoenents
