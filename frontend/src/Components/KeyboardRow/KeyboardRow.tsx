import * as React from 'react';
import styled from 'styled-components';

const Row = styled.div(() => ({
  display: 'flex',
  width: '100%',
  margin: '0 auto 8px',
  touchAction: 'manipulation',
}))

interface KeyboardRowProps {
  children: React.ReactNode
}

export const KeyboardRow = ({ children }: KeyboardRowProps) => {
  return (
    <Row>
      {children}
    </Row>
  )
}
