import * as React from 'react';
import styled from 'styled-components';

const Game = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
    <Game>
    </Game>
  )
};

export default App;
