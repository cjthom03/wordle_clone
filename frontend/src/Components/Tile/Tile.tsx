import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material'

import { DataStates } from '../../Types';
import { StyleHelpers } from '../../Helpers'

interface ContainerProps {
  dataState?: DataStates;
}

const Container = styled.div<ContainerProps>(({ theme, dataState }) => ({
  width: "100%",
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  ...StyleHelpers.stateBasedBackgrounds({dataState, theme}),
  ...StyleHelpers.stateBasedBorders({dataState, theme}),
  ...StyleHelpers.stateBasedFontColors({dataState, theme}),
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

export const Tile = () => {
  return (
    <Container dataState={undefined}>
      <Letter></Letter>
    </Container>
  )
}
