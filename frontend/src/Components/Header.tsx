import * as React from 'react';
import styled from 'styled-components';
import { Typography  } from '@mui/material';

const Title = styled(Typography).attrs(() => ({
  variant: 'h4',
}))(({ theme }) =>({
  color: theme.palette.text.primary,
}))

const Wrapper = styled.div(({ theme }) => ({
  height: 50,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.border.grey}`
}));

const Header = () => {
  return (
    <Wrapper>
      <Title>Wordle</Title>
    </Wrapper>
  )
};

export default Header;
