import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider   } from '@mui/system';
import { useSelector  } from 'react-redux';

import { RootState } from '../store';
import { GlobalStyles  } from '../Fonts/fonts';
import { getTheme  } from './themes';

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) =>{
  const theme = useSelector((state: RootState) => state.theme.mode)

  return (
    <React.Fragment>
      <GlobalStyles />
      <CssBaseline />
      <MuiThemeProvider theme={getTheme(theme)}>
        {children}
      </MuiThemeProvider>
    </React.Fragment>
  )
}

