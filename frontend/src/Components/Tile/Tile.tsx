import * as React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@mui/material'

import { DataStates, TileAnimations } from '../../Types';
import { StyleHelpers } from '../../Helpers';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { endTileAnimation, updateDataState } from '../../Reducers/rowReducer';

interface ContainerProps {
  datastate?: DataStates;
  animation: TileAnimations;
  index: number;
}

interface TileProps {
  row: number,
  tile: number
}

const AnimatedContainer = styled.div<ContainerProps>(({animation, index}) => {
  return css`
    ${StyleHelpers.tileAnimation({ animation, index })}
  `
})

const Container = styled(AnimatedContainer)(({ theme, datastate }) => ({
  width: "100%",
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  ...StyleHelpers.stateBasedBackgrounds({datastate, theme}),
  ...StyleHelpers.stateBasedBorders({datastate, theme}),
  ...StyleHelpers.stateBasedFontColors({datastate, theme}),
}))

const Letter = styled(Typography)(({theme}) => ({
  width: '100%',
  fontWeight: theme.typography.fontWeightBold,
  'text-align': 'center',
  'text-transform': 'uppercase',
  fontSize: '2rem',
  ['@media (max-height: 550px)']: {
    fontSize: '1rem',
  }
}))

export const Tile = ({row, tile}: TileProps) => {
  const { datastate, letter, animation } = useAppSelector((state) => state.rows[row][tile])
  const dispatch = useAppDispatch();

  const onAnimationEnd = (event: React.SyntheticEvent) => {
    event.stopPropagation();

    if(animation === TileAnimations.FLIP_IN) {
      dispatch(updateDataState([row, tile]));
    } else {
      dispatch(endTileAnimation([row, tile]))
    }
  }

  return (
    <Container index={tile} datastate={datastate} animation={animation} onAnimationEnd={onAnimationEnd}>
      <Letter>{letter}</Letter>
    </Container>
  )
}
