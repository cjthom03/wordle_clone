import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './default.css';
import App from './App';

const appRoutes = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

ReactDOM.render(appRoutes, document.getElementById('root'));
