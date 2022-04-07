import * as React from 'react';
import styled from 'styled-components';

import { DataStates } from '../../Types';
import { StyleHelpers } from '../../Helpers'

interface ContainerProps {
  dataState?: DataStates;
}

const Container = styled.div<ContainerProps>(({ theme, dataState }) => ({
  width: "100%",
  height: '100%',
  ...StyleHelpers.stateBasedSytles({dataState, theme}),
  ...StyleHelpers.stateBasedBorders({dataState, theme}),
}))

export const Tile = () => {
  return (
    <Container dataState={DataStates.TBD} />
  )
}
