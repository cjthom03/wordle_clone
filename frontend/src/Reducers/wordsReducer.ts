import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

export type TAllWords = string[];

export interface WordsState {
  allWords: TAllWords,
}

const initialWordsState: WordsState = {
  allWords: [],
}

export const wordsSlice = createSlice({
  name: 'words',
  initialState: initialWordsState,
  reducers: {
    setWords: (state, action: PayloadAction<string[]>) => {
      state.allWords = action.payload;
    },
  }
})

export const { setWords } = wordsSlice.actions

export const wordsReducer = wordsSlice.reducer
