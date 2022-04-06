import * as React from 'react';
import styled from 'styled-components';

const Game = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
    <Game>
      <Title>Hello, Worlds!</Title>
    </Game>
  )
};

export default App;
