import { Theme  } from '@mui/material/styles';

export const stateBasedSytles = (dataState: string | undefined, theme: Theme) => {
  switch(dataState) {
          case 'absent':
      return {
        backgroundColor: theme.palette.fill.darkGrey,
        color: theme.palette.fill.contrastText,
      }
          case 'correct':
      return {
        backgroundColor: theme.palette.fill.green,
        color: theme.palette.fill.contrastText,
      }
          case 'present':
      return {
        backgroundColor: theme.palette.fill.yellow,
        color: theme.palette.fill.contrastText,
      }
    default: {
      return {
        color: theme.palette.text.primary,
      }
    }
  }
}


