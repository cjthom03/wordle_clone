import * as React from 'react';
import styled from 'styled-components';
import { Typography, Switch as MuiSwitch   } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeMode } from '../../Reducers/themeReducer';

const Toggle = styled.div(() => ({
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}));

const Label = styled(Typography)(({theme}) => ({
    color: theme.palette.text.primary,
}));

const Switch = styled(MuiSwitch)(({theme}) =>({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
            color: theme.palette.common.white,
      '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.fill.green,
                opacity: 1,
      }
    }
  }
}));


const newMode = (event: React.ChangeEvent<HTMLInputElement>) => {
  return event.target.checked? 'dark' : 'light'
}


export const ThemeToggle = () => {
  const mode = useAppSelector((state) => state.theme.mode)
  const dispatch = useAppDispatch();

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMode(newMode(event)))
  }

  return (
    <Toggle>
      <Label variant='body2'>Dark Mode</Label>
      <Switch checked={mode === 'dark'} onChange={toggleTheme} disableRipple />
    </Toggle>
  )
};

