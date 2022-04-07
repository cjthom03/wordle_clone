
import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

import { DataStates } from '../Types';
import { RowCount } from '../Components/Board/Board';
import { TileCount } from '../Components/BoardRow/BoardRow';

export interface RowState {
  currentRow: number,
  [key: number]: {
    guess: string,
    [key: number]: {
      dataState?: DataStates,
      letter?: string,
    }
  }
}

export interface RowPayload {
  row: number,
  tile: number,
}

export interface AddLetterPayload extends RowPayload {
  letter: string,
}

const initialRowState = (): RowState => {
  let state: RowState = { currentRow: 0 };
  const tiles = [...Array(TileCount)];
  const rows = [...Array(RowCount)];

  rows.forEach((_, i: number) => {
    state[i] = { guess: '' }

    tiles.forEach((_, j: number) => {
      state[i][j] = {
        letter: undefined,
        dataState: undefined,
      }
    })
  })

  return state;
}

export const rowSlice = createSlice({
  name: 'rows',
  initialState: initialRowState(),
  reducers: {
    addLetter: (state, action: PayloadAction<AddLetterPayload>) => {
      const { row, tile, letter } = action.payload;

      if(row !== state.currentRow || state[row].guess.length === TileCount) return;

      state[row].guess = state[row].guess + letter[0]
      state[row][tile] = { letter, dataState: DataStates.TBD }
    },
    removeLetter: (state, action: PayloadAction<RowPayload>) => {
      const { row, tile } = action.payload;

      if(row !== state.currentRow || !state[row].guess.length) return;

      state[row].guess = state[row].guess.slice(0, -1)
      state[row][tile] = { letter: undefined, dataState: undefined }
    },
    nextRow: (state) => {
      if(state.currentRow < RowCount - 1) state.currentRow += 1
    }
  }
})

export const { addLetter, removeLetter, nextRow } = rowSlice.actions;

export const rowReducer = rowSlice.reducer;
