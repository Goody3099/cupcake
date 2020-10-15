import React from 'react';
import ReactDOM from 'react-dom';
import { Cupcake } from "./components/Cupcake.js"
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Cupcake />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
