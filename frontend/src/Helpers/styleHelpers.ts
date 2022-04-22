import { Theme } from '@mui/material/styles';
import { keyframes, css } from 'styled-components';

import { DataStates, TileAnimations, RowAnimations } from '../Types';

interface StateBasedStyleProps {
  datastate?: DataStates;
  theme: Theme;
}

interface ITileAnimations {
  animation: TileAnimations;
  index: number;
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

const FlipIn = keyframes`
  0% { transform: rotateX(0); }
  100% { transform: rotateX(-90deg); }
`

const FlipInAnimation = ({index}: ITileAnimations) => css`
  animation-name: ${FlipIn};
  animation-duration: 250ms;
  animation-delay: ${index * 250}ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`

const FlipOut = keyframes`
  0% { transform: rotateX(-90deg); }
  100% { transform: rotateX(0); }
`

const FlipOutAnimation = css`
  animation-name: ${FlipOut};
  animation-duration: 250ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`

export const tileAnimation = (props: ITileAnimations) => {
  switch(props.animation) {
    case TileAnimations.POP:
      return PopInAnimation
    case TileAnimations.FLIP_IN:
      return FlipInAnimation(props);
    case TileAnimations.FLIP_OUT:
      return FlipOutAnimation
    default:
      return ''
  }
}

const Shake = keyframes`
  10%, 90% { transform: translateX(-1px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-4px); }
  40%, 60% { transform: translateX(4px); }
`

const ShakeAnimation = css`
  animation-name: ${Shake};
  animation-duration: 600ms;
`

export const rowAnimation = (animation?: RowAnimations) => {
  switch(animation) {
    case RowAnimations.SHAKE:
      return ShakeAnimation
    default:
      return ''
  }
}

