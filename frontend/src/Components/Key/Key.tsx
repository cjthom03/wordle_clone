import * as React from 'react';
import styled from 'styled-components';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface KeyProps {
  dataKey: string;
  size?: number;
}

interface ButtonProps extends MuiButtonProps {
  flexsize: number
}

const Button = styled(MuiButton)<ButtonProps>(({ flexsize, theme }) => ({
  height: '3.625rem',
  marginRight: 6,
  padding: 0,
  backgroundColor: theme.palette.fill.lightGrey,
  minWidth: 0,
  flex: flexsize,
  '&:last-of-type': {
    margin: 0,
  }
}))


export const Key = ({ dataKey, size = 1  }: KeyProps) => {
  return (
    <Button flexsize={size}>{dataKey}</Button>
  )
}
