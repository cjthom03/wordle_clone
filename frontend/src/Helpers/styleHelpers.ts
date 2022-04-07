import { Theme } from '@mui/material/styles';

import { DataStates } from '../Types';

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

