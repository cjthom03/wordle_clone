import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    border: {
      grey: string;
    },
    fill: {
      lightGrey: string,
      darkGrey: string,
    }
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    border: {
      grey: string;
    },
    fill: {
      lightGrey: string,
      darkGrey: string,
    }
  }
}

export const getTheme = (mode: string) => mode === 'dark' ? darkTheme : lightTheme;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    border: {
      grey: '#3a3a3c',
    },
    fill: {
      lightGrey: '#818384',
      darkGrey: '#3a3a3c',
    }
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    border: {
      grey: '#d3d6da',
    },
    fill: {
      lightGrey: '#d3d6da',
      darkGrey: '#78767e',
    }
  }
})
