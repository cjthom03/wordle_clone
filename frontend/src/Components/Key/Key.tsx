import * as React from 'react';
import styled from 'styled-components';
import { ButtonBase as MuiButton, ButtonBaseProps as MuiButtonProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface KeyProps {
  dataKey: string;
  size?: number;
  dataState?: string;
}

interface ButtonProps extends MuiButtonProps {
  flexsize: number;
  dataState?: string;
}

const stateBasedSytles = (dataState: string | undefined, theme: Theme) => {
  switch(dataState) {
    case 'absent':
      return {
        backgroundColor: theme.palette.fill.darkGrey,
        color: theme.palette.fill.contrastText,
      }
    case 'correct':
      return {
        backgroundColor: theme.palette.fill.green,
        color: theme.palette.fill.contrastText,
      }
    case 'present':
      return {
        backgroundColor: theme.palette.fill.yellow,
        color: theme.palette.fill.contrastText,
      }
    default: {
      return {
        color: theme.palette.text.primary,
      }
    }
  }
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
    ...stateBasedSytles(dataState, theme),
}))


export const Key = ({ dataKey, dataState, size = 1  }: KeyProps) => {
  return (
    <Button flexsize={size} dataState={dataState} disableRipple disableTouchRipple>{dataKey}</Button>
  )
}
