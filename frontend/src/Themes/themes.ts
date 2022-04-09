import { createTheme } from '@mui/material/styles';

import { ThemeModes } from '../Types';

const sharedThemeAttributes = {
  components: {
    MuiSnackbar: {
      styleOverrides: {
        anchorOriginTopCenter: {
          minWidth: '100px',
          top: '13%',
          '@media (min-width: 0px)': {
            top: '13%',
            minWidth: '100px',
            left: '50%',
            right: 'auto',
            transform: 'translateX(-50%)',
          }
        }
      }
    }
  },
  typography: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
  },
}

const darkTheme = createTheme({
  ...sharedThemeAttributes,
  palette: {
    mode: ThemeModes.DARK,
    border: {
      grey: '#3a3a3c',
      greyActive: '#565758',
    },
    fill: {
      lightGrey: '#818384',
      darkGrey: '#3a3a3c',
      yellow: '#b59f3b',
      green: '#538d4e',
      contrastText: '#000000de',
    }
  }
})

const lightTheme = createTheme({
  ...sharedThemeAttributes,
  palette: {
    mode: ThemeModes.LIGHT,
    border: {
      grey: '#d3d6da',
      greyActive: '#878a8c',
    },
    fill: {
      lightGrey: '#d3d6da',
      darkGrey: '#78767e',
      yellow: '#c9b458',
      green: '#6aaa64',
      contrastText: '#fff',
    }
  }
})

export const getTheme = (mode: string) => mode === ThemeModes.DARK ? darkTheme : lightTheme;

