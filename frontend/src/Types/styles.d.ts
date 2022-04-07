import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    border: {
      grey: string;
      greyActive: string;
    },
    fill: {
      lightGrey: string,
      darkGrey: string,
      yellow: string,
      green: string,
      contrastText: string,
    }
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    border: {
      grey: string;
      greyActive: string;
    },
    fill: {
      lightGrey: string,
      darkGrey: string,
      yellow: string,
      green: string,
      contrastText: string,
    }
  }
}
