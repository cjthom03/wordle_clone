import * as React from 'react';
import styled from 'styled-components';

import { HEIGHT as HeaderHeight } from '../../Components/Header/Header';
import { Board } from '../../Components/Board/Board';
import { Keyboard } from '../../Components/Keyboard/Keyboard';

const GameWrapper = styled.div(() => ({
  width: '100%',
  maxWidth: 500,
  height: `calc(100% - ${HeaderHeight}px)`,
  margin: '0 auto',
  display: 'flex',
  'flex-direction': 'column',
}))

export const Game = () => {
  return (
    <GameWrapper>
      <Board />
      <Keyboard />
    </GameWrapper>
  )
}

