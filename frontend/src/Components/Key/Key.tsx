import * as React from 'react';
import styled from 'styled-components';
import { ButtonBase as MuiButton, ButtonBaseProps as MuiButtonProps } from '@mui/material';
import { Action } from 'redux';

import { StyleHelpers } from '../../Helpers';
import { DataStates } from '../../Types';
import { useAppDispatch } from '../../hooks';
import { addLetter, removeLetter, nextRow } from '../../Reducers/rowReducer';

interface KeyProps {
  dataKey: string
}

interface ButtonProps extends MuiButtonProps {
  flexsize: number;
  datastate?: DataStates;
}

interface BaseKeyProps extends KeyProps {
  flexsize: number;
  datastate?: DataStates;
  clickAction: Action;
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

const KeyBase = ({ dataKey, flexsize, datastate, clickAction }: BaseKeyProps) => {
  const dipatch = useAppDispatch();

  return (
    <Button
      flexsize={flexsize}
      datastate={datastate}
      onClick={() => dipatch(clickAction)}
      disableRipple
      disableTouchRipple>
      {dataKey}
    </Button>
  )
}

export const Key = ({ dataKey }: KeyProps) => {
  const datastate = undefined;

  return (
    <KeyBase flexsize={1} dataKey={dataKey} datastate={datastate} clickAction={addLetter(dataKey)} />
  )
}

Key.Enter = () => <KeyBase flexsize={1.5} dataKey={'enter'} clickAction={nextRow()} />
Key.Backspace = () => <KeyBase flexsize={1.5} dataKey={'(back)'} clickAction={removeLetter()} />

