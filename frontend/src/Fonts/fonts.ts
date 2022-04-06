import { createGlobalStyle } from 'styled-components';
import KarnakProCondensed from './KarnakPro-CondensedBlack.otf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'KarnakProCondensed';
      src: url(${KarnakProCondensed}) format('opentype');
      font-weight: normal;
      font-style: normal;
    }
`
