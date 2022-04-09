import { Theme } from '@mui/material/styles';
import { keyframes, css } from 'styled-components';

import { DataStates, TileAnimations } from '../Types';

interface StateBasedStyleProps {
  datastate?: DataStates;
  theme: Theme;
}

export const stateBasedBackgrounds = ({datastate, theme}:StateBasedStyleProps) => {
  switch(datastate) {
    case DataStates.ABSENT:
      return { backgroundColor: theme.palette.fill.darkGrey }
    case DataStates.CORRECT:
      return { backgroundColor: theme.palette.fill.green }
    case DataStates.PRESENT:
      return { backgroundColor: theme.palette.fill.yellow }
    case DataStates.TBD:
    default: {
      return { }
    }
  }
}

export const stateBasedBorders= ({datastate, theme}:StateBasedStyleProps) => {
  switch(datastate) {
    case DataStates.CORRECT:
    case DataStates.PRESENT:
    case DataStates.ABSENT:
      return { border: 'none' }
    case DataStates.TBD:
      return { border: `2px solid ${theme.palette.border.greyActive}` }
    default: {
      return { border: `2px solid ${theme.palette.border.grey}` }
    }
  }
}

export const stateBasedFontColors = ({datastate, theme}:StateBasedStyleProps) => {
  switch(datastate) {
    case DataStates.ABSENT:
    case DataStates.CORRECT:
    case DataStates.PRESENT:
      return { color: theme.palette.common.white }
    case DataStates.TBD:
    default: {
      return {
        color: theme.palette.text.primary,
      }
    }
  }
}

const PopIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  40% { transform: scale(1.1); opacity: 1; }
`

const PopInAnimation = css`
  animation-name: ${PopIn};
  animation-duration: 100ms;
`

export const tileAnimation = (animation?: TileAnimations ) => {
  switch(animation) {
    case TileAnimations.POP:
      return PopInAnimation
    default:
      return ''
  }
}

