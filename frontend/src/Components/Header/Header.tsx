import * as React from 'react';
import styled from 'styled-components';
import { Typography  } from '@mui/material';

export const HEIGHT = 50;

const Title = styled(Typography).attrs(() => ({
  variant: 'h4',
}))(({ theme }) =>({
  color: theme.palette.text.primary,
  fontSize: '2.3125rem',
  fontFamily: 'KarnakProCondensed',
}))

const Wrapper = styled.div(({ theme }) => ({
  height: HEIGHT,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.border.grey}`
}));

export const Header = () => {
  return (
    <Wrapper>
      <Title>Wordle</Title>
    </Wrapper>
  )
};
