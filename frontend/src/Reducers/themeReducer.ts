import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

export interface ThemeState {
  mode: string
}

const initialThemeState: ThemeState = {
  mode: 'dark'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    changeMode: (state, action: PayloadAction<string>) => {
      switch(action.payload) {
        case 'light':
        case 'dark':
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
