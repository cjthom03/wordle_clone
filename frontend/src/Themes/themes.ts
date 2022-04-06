import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: string) => mode === 'dark' ? darkTheme : lightTheme;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  }
})
