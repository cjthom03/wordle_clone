import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider  } from './Themes/ThemeProvider';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './App';

const appRoutes = (
  <Provider store={store}>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(appRoutes, document.getElementById('root'));
