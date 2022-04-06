import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div(({ theme }) => ({
  width: "100%",
  height: '100%',
  border: `2px solid ${theme.palette.border.grey}`
}))

export const Tile = () => {
  return (
    <Container />
  )
}
