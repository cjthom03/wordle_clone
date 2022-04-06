import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider  } from '@mui/system';

import { getTheme } from './Themes/themes';
import App from './App';

const appRoutes = (
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={getTheme('light')}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.Fragment>
);

ReactDOM.render(appRoutes, document.getElementById('root'));
