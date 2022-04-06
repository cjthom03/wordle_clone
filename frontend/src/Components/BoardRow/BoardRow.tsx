import * as React from 'react';
import styled from 'styled-components';

import { Tile } from '../../Components/Tile/Tile';

export const TileCount = 5;

const Row = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${TileCount}, 1fr)`,
  gridGap: 5,
}))

export const BoardRow = () => {
  return (
    <Row>
      {[...Array(TileCount)].map((_, i) => {
        return <Tile key={i} />
      })}
    </Row>
  )
}
