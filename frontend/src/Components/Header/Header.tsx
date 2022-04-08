import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

import { ThemeToggle } from '../Toggles/ThemeToggle';

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
  width: '30%',
}))

const PlaceHolder = styled.div(() => ({
  width: '35%',
}));

export const Header = () => {
  return (
    <Wrapper>
      <PlaceHolder />
      <Title>Wordle</Title>
      <ThemeToggle />
    </Wrapper>
  )
};
