import * as React from 'react';
import styled from 'styled-components';

const KeyboardHeight = 200;

const Container = styled.div(() => ({
  height: KeyboardHeight,
}))

export const Keyboard = () => <Container />;
