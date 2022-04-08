import * as React from 'react';
import styled from 'styled-components';

import { KeyboardRow } from '../../Components/KeyboardRow/KeyboardRow';
import { Key } from '../../Components/Key/Key';
import { KeyPress } from './KeyPress';

const Container = styled.div(() => ({
  margin: '0 8px',
  'user-select': 'none',
}))

const Spacer = styled.div(() => ({
  flex: 0.5
}))

export const Keyboard = () => {
  return (
    <Container>
      <KeyboardRow>
        {'qwertyuiop'.split('').map((key, i) => <Key dataKey={key} key={i} />) }
      </KeyboardRow>
      <KeyboardRow>
        <Spacer />
        {'asdfghjkl'.split('').map((key, i) => <Key dataKey={key} key={i} />) }
        <Spacer />
      </KeyboardRow>
      <KeyboardRow>
        <Key.Enter />
        {'zxcvbnm'.split('').map((key, i) => <Key dataKey={key} key={i} />) }
        <Key.Backspace />
      </KeyboardRow>
      <KeyPress />
    </Container>
  )
}
