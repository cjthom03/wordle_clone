import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

import { ThemeModes } from '../Types';

export interface ThemeState {
  mode: string
}

const initialThemeState: ThemeState = {
  mode: ThemeModes.DARK
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    changeMode: (state, action: PayloadAction<string>) => {
      switch(action.payload) {
        case ThemeModes.LIGHT:
        case ThemeModes.DARK:
          state.mode = action.payload;
          break

        default:
          state.mode = initialThemeState.mode;
      }
    }
  }
})

export const { changeMode } = themeSlice.actions

export const themeReducer = themeSlice.reducer
