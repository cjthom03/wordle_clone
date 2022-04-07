import { Theme } from '@mui/material/styles';

import { DataStates } from '../Types';

interface StateBasedStyleProps {
  dataState?: DataStates;
  theme: Theme;
}

export const stateBasedBackgrounds = ({dataState, theme}:StateBasedStyleProps) => {
  switch(dataState) {
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

export const stateBasedBorders= ({dataState, theme}:StateBasedStyleProps) => {
  switch(dataState) {
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

export const stateBasedFontColors = ({dataState, theme}:StateBasedStyleProps) => {
  switch(dataState) {
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

