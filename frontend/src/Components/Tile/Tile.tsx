import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material'

import { DataStates } from '../../Types';
import { StyleHelpers } from '../../Helpers';
import { useAppSelector } from '../../hooks';

interface ContainerProps {
  datastate?: DataStates;
}

interface TileProps {
  row: number,
  tile: number
}

const Container = styled.div<ContainerProps>(({ theme, datastate }) => ({
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
  const { datastate, letter } = useAppSelector((state) => state.rows[row][tile])

  return (
    <Container datastate={datastate}>
      <Letter>{letter}</Letter>
    </Container>
  )
}
