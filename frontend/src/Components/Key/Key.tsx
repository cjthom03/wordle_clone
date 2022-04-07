import * as React from 'react';
import styled from 'styled-components';
import { ButtonBase as MuiButton, ButtonBaseProps as MuiButtonProps } from '@mui/material';

import { StyleHelpers } from '../../Helpers';
import { DataStates } from '../../Types';

interface KeyProps {
  dataKey: string;
  size?: number;
  dataState?: DataStates;
}

interface ButtonProps extends MuiButtonProps {
  flexsize: number;
  dataState?: DataStates;
}


const Button = styled(MuiButton)<ButtonProps>(({ flexsize, theme, dataState }) => ({
  height: '3.625rem',
  marginRight: 6,
  padding: 0,
  minWidth: 0,
  flex: flexsize,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: theme.shape.borderRadius,
  textTransform: 'uppercase',
  '&:last-of-type': {
    margin: 0,
  },
  backgroundColor: theme.palette.fill.lightGrey,
  ...StyleHelpers.stateBasedBackgrounds({dataState, theme}),
  ...StyleHelpers.stateBasedFontColors({dataState, theme}),
}))


export const Key = ({ dataKey, dataState, size = 1  }: KeyProps) => {
  return (
    <Button flexsize={size} dataState={dataState} disableRipple disableTouchRipple>{dataKey}</Button>
  )
}
