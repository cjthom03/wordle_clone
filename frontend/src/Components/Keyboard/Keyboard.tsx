import * as React from 'react';
import styled from 'styled-components';

import { KeyboardRow } from '../../Components/KeyboardRow/KeyboardRow';
import { Key } from '../../Components/Key/Key';

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
        <Key dataKey='enter' size={1.5} />
        {'zxcvbnm'.split('').map((key, i) => <Key dataKey={key} key={i} />) }
        <Key dataKey='(back)' size={1.5} />
      </KeyboardRow>
    </Container>
  )
}