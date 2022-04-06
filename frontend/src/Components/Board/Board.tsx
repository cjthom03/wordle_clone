import * as React from 'react';
import styled from 'styled-components';

import { BoardRow } from '../../Components/BoardRow/BoardRow';

const RowCount = 6;

const BoardWrapper = styled.div(() =>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
}))

const BoardRows = styled.div(() => ({
  display: 'grid',
  gridTemplateRows: `repeat(${RowCount}, 1fr)`,
  gridGap: 5,
  padding: 10,
  height: '100%',
  aspectRatio: '5 / 6',
}))

export const Board = () => {
  return (
    <BoardWrapper>
      <BoardRows>
        {[...Array(RowCount)].map((_, i) => {
          return <BoardRow key={i} />
        })}
      </BoardRows>
    </BoardWrapper>
  )
}
