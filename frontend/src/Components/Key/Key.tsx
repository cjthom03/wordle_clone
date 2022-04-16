import * as React from 'react';
import styled from 'styled-components';
import { ButtonBase as MuiButton, ButtonBaseProps as MuiButtonProps } from '@mui/material';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { Action } from 'redux';

import { StyleHelpers } from '../../Helpers';
import { DataStates } from '../../Types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { addLetter, removeLetter, nextRow } from '../../Reducers/rowReducer';

interface KeyProps {
  dataKey: string;
}

interface ButtonProps extends MuiButtonProps {
  flexsize: number;
  datastate?: DataStates;
}

interface BaseKeyProps extends KeyProps {
  flexsize: number;
  datastate?: DataStates;
  children?: React.ReactNode;
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

const KeyBase = ({ dataKey, flexsize, datastate, clickAction, children }: BaseKeyProps) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      flexsize={flexsize}
      datastate={datastate}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(clickAction)
        event.currentTarget.blur()
      }}
      disableRipple
      disableTouchRipple>
      {children || dataKey}
    </Button>
  )
}

export const Key = ({ dataKey }: KeyProps) => {
  const datastate = useAppSelector((state) => state.letters[dataKey].datastate)

  return (
    <KeyBase
      flexsize={1}
    dataKey={dataKey}
    datastate={datastate}
    clickAction={addLetter(dataKey)} />
  )
}

Key.Enter = () => <KeyBase flexsize={1.5} dataKey={'enter'} clickAction={nextRow()} />

Key.Backspace = () => <KeyBase flexsize={1.5} dataKey={'backspace'} clickAction={removeLetter()}><BackspaceOutlinedIcon /></KeyBase>

