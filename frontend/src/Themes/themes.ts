import { createTheme } from '@mui/material/styles';

const sharedThemeAttributes = {
  typography: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
  },
}

const darkTheme = createTheme({
  ...sharedThemeAttributes,
  palette: {
    mode: 'dark',
    border: {
      grey: '#3a3a3c',
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
    mode: 'light',
    border: {
      grey: '#d3d6da',
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

export const getTheme = (mode: string) => mode === 'dark' ? darkTheme : lightTheme;

