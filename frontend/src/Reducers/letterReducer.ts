import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

import { DataStates, datastateMap, letterTestToDatastate } from '../Types';

export interface LetterState {
  letter: string,
  datastate: DataStates
}

export interface LetterStates {
  [key: string]: LetterState,
}

const defaultLetterState = {
  datastate: DataStates.TBD,
}

const initialLetterState: LetterStates = (() => {
  let letters: LetterStates = {};

  'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter: string) => {
    letters[letter] = { ...defaultLetterState, letter: letter };
  })

  return letters
})()

export const letterSlice = createSlice({
  name: 'letter',
  initialState: initialLetterState,
  reducers: {
    updateLetters: (state, action: PayloadAction<[string, number[]]>) => {
      const [guess, testResults] = action.payload;

      guess.split('').forEach((letter: string, i) => {
        const currentState = state[letter].datastate;
        const datastateIndex = testResults[i]

       if(letterTestToDatastate[currentState] < datastateIndex) {
          state[letter].datastate = datastateMap[datastateIndex] || DataStates.TBD;
        }
      })
    },
  }
})

export const { updateLetters } = letterSlice.actions

export const letterReducer = letterSlice.reducer;
