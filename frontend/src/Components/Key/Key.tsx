import * as React from 'react';
import styled from 'styled-components';
import { ButtonBase as MuiButton, ButtonBaseProps as MuiButtonProps } from '@mui/material';

import { StyleHelpers } from '../../Helpers';
import { DataStates } from '../../Types';
import { useAppDispatch } from '../../hooks';
import { addLetter, nextRow } from '../../Reducers/rowReducer';

interface KeyProps {
  dataKey: string;
  size?: number;
  datastate?: DataStates;
}

interface ButtonProps extends MuiButtonProps {
  flexsize: number;
  datastate?: DataStates;
}


const Button = styled(MuiButton)<ButtonProps>(({ flexsize, theme, datastate }) => ({
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
  ...StyleHelpers.stateBasedBackgrounds({datastate, theme}),
  ...StyleHelpers.stateBasedFontColors({datastate, theme}),
}))


export const Key = ({ dataKey, datastate, size = 1  }: KeyProps) => {
  const dipatch = useAppDispatch();

  return (
    <Button
      flexsize={size}
      datastate={datastate}
      onClick={() => dipatch(addLetter(dataKey))}
      disableRipple
      disableTouchRipple>
      {dataKey}
    </Button>
  )
}

Key.Enter = () => {
  const dipatch = useAppDispatch();

  return (
    <Button
      flexsize={1.5}
      onClick={() => dipatch(nextRow())}
      disableRipple
      disableTouchRipple>
      enter
    </Button>
  )
}
