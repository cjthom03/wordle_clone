import * as React from 'react';
import styled from 'styled-components';

import { Header } from './Components/Header/Header';
import { Game } from './Components/Game/Game';

const Main = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const App = () => {
  return (
    <Main>
      <Header />
      <Game />
    </Main>
  )
};

export default App;
