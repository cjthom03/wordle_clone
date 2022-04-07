import * as React from 'react';
import styled from 'styled-components';
import { Typography, Switch as MuiSwitch  } from '@mui/material';

export const HEIGHT = 50;

const Wrapper = styled.div(({ theme }) => ({
  height: HEIGHT,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlignLast: 'center',
  borderBottom: `1px solid ${theme.palette.border.grey}`
}));

const Title = styled(Typography).attrs(() => ({
  variant: 'h4',
}))(({ theme }) =>({
  color: theme.palette.text.primary,
  fontSize: '2.3125rem',
  fontFamily: 'KarnakProCondensed',
  width: '60%',
}))

const ThemeToggle = styled.div(() => ({
  width: '20%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}));

const Label = styled(Typography)``;

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

const PlaceHolder = styled.div(() => ({
  width: '20%',
}));

export const Header = () => {
  return (
    <Wrapper>
      <PlaceHolder />
      <Title>Wordle</Title>
      <ThemeToggle>
        <Label variant='body2'>Dark Mode</Label>
        <Switch disableRipple />
      </ThemeToggle>
    </Wrapper>
  )
};
