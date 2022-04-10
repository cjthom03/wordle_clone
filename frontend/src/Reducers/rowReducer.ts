import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store';
import { DataStates, RowStates, TileAnimations, RowAnimations } from '../Types';
import { RowCount } from '../Components/Board/Board';
import { TileCount } from '../Components/BoardRow/BoardRow';
import { openToast } from '../Reducers/toastReducer';

export interface RowState {
  currentRow: number,
  rowState: RowStates,
  [key: number]: {
    guess: string,
    animation: RowAnimations,
    [key: number]: {
      datastate?: DataStates,
      letter?: string,
      animation?: TileAnimations,
    }
  }
}

const initialRowState = (): RowState => {
  let state: RowState = { currentRow: 0, rowState: RowStates.IDLE };
  const tiles = [...Array(TileCount)];
  const rows = [...Array(RowCount)];

  rows.forEach((_, i: number) => {
    state[i] = { guess: '', animation: RowAnimations.IDLE }

    tiles.forEach((_, j: number) => {
      state[i][j] = {
        letter: undefined,
        datastate: undefined,
        animation: undefined,
      }
    })
  })

  return state;
}

export const checkRow = createAsyncThunk<{}, undefined, { state: RootState }>(
  'rows/checkRow',
  async (_arg, thunkApi) => {
    const state = thunkApi.getState();

    if(state.rows[state.rows.currentRow].guess.length !== TileCount) {
      thunkApi.dispatch(openToast('Not enough letters'))
      thunkApi.dispatch(startAnimation(RowAnimations.SHAKE))
    } else if(state.rows.currentRow < RowCount - 1) {
      thunkApi.dispatch(nextRow())
    }
  }
)

export const rowSlice = createSlice({
  name: 'rows',
  initialState: initialRowState(),
  reducers: {
    addLetter: (state, action: PayloadAction<string>) => {
      if(state.rowState !== RowStates.IDLE) return;

      const letter = action.payload;
      const row = state.currentRow;
      const tile = state[row].guess.length;

      if(state[row].guess.length === TileCount) return;

      state[row].guess = state[row].guess + letter[0]
      state[row][tile] = {
        letter,
        datastate: DataStates.TBD,
        animation: TileAnimations.POP,
      }
    },
    removeLetter: (state) => {
      if(state.rowState !== RowStates.IDLE) return;

      const row = state.currentRow;
      const tile = state[row].guess.length - 1;

      if(!state[row].guess.length) return;

      state[row].guess = state[row].guess.slice(0, -1)
      state[row][tile] = {
        letter: undefined,
        datastate: undefined,
        animation: undefined,
      }
    },
    nextRow: (state) => {
      state.currentRow += 1
    },
    startAnimation: (state, action: PayloadAction<RowAnimations>) => {
      state[state.currentRow].animation = action.payload
    },
    endAnimation: (state, action: PayloadAction<number>) => {
      state[action.payload].animation = RowAnimations.IDLE
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkRow.pending, (state) => { state.rowState = RowStates.PROCESSING }),
    builder.addCase(checkRow.fulfilled, (state) => { state.rowState = RowStates.IDLE })
  }
})

export const { addLetter, removeLetter, nextRow, startAnimation, endAnimation } = rowSlice.actions;

export const rowReducer = rowSlice.reducer;
