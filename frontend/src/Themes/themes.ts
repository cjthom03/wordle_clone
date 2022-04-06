import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    border: {
      grey: string;
    }
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    border: {
      grey: string;
    }
  }
}

export const getTheme = (mode: string) => mode === 'dark' ? darkTheme : lightTheme;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    border: {
      grey: '#3a3a3c',
    }
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    border: {
      grey: '#d3d6da',
    }
  }
})
