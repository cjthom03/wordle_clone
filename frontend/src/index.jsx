import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';

const appRoutes = (
  <React.Fragment>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.Fragment>
);

ReactDOM.render(appRoutes, document.getElementById('root'));
