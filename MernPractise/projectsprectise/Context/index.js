import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Component/Main'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import FlightContext from './Contexts/FlightContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FlightContext>
        <App />
      </FlightContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
