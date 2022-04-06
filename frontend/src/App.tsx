import * as React from 'react';
import styled from 'styled-components';

import Header from './Components/Header'

const Game = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const App = () => {
  return (
    <Game>
      <Header />
    </Game>
  )
};

export default App;
