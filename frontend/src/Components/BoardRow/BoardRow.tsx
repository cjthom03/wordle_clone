import * as React from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { Tile } from '../../Components/Tile/Tile';
import { RowAnimations } from '../../Types';
import { StyleHelpers } from '../../Helpers';
import { endAnimation } from '../../Reducers/rowReducer';

interface BoardRowProps {
  row: number
}

interface RowProps {
  animation: RowAnimations
}

export const TileCount = 5;

const AnimatedRow = styled.div<RowProps>`
  ${props => StyleHelpers.rowAnimation(props.animation)}
`

const Row = styled(AnimatedRow)(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${TileCount}, 1fr)`,
  gridGap: 5,
}))

export const BoardRow = ({ row }: BoardRowProps) => {
  const animation = useAppSelector((state) => state.rows[row].animation)
  const dispatch = useAppDispatch();

  const onAnimationEnd = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    dispatch(endAnimation(row));
  }

  return (
    <Row animation={animation} onAnimationEnd={onAnimationEnd}>
      {[...Array(TileCount)].map((_, i) => {
        return <Tile key={i} tile={i} row={row}/>
      })}
    </Row>
  )
}
