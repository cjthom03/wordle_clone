import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store';
import { DataStates, datastateMap, RowStates, TileAnimations, RowAnimations, GameStatus } from '../Types';
import { RowCount } from '../Components/Board/Board';
import { TileCount } from '../Components/BoardRow/BoardRow';
import { openToast } from '../Reducers/toastReducer';
import { updateLetters } from '../Reducers/letterReducer';
import { WordHelpers } from '../Helpers';
import { wordApi } from '../Services/words';
import { checkStatus } from '../Reducers/gameReducer';

export interface TileState {
  datastate?: DataStates,
  letter?: string,
  animation: TileAnimations,
  testResult: number,
}

export interface RowState {
  currentRow: number,
  rowState: RowStates,
  [key: number]: {
    guess: string,
    testResults: number[],
    animation: RowAnimations,
    [key: number]: TileState,
  }
}

const iniialTileState: TileState = {
  datastate: undefined,
  letter: undefined,
  animation: TileAnimations.IDLE,
  testResult: -1,
}

const initialRowState = (): RowState => {
  let state: RowState = { currentRow: 0, rowState: RowStates.IDLE };
  const tiles = [...Array(TileCount)];
  const rows = [...Array(RowCount)];

  rows.forEach((_, i: number) => {
    state[i] = { guess: '', animation: RowAnimations.IDLE, testResults: [] }

    tiles.forEach((_, j: number) => state[i][j] = iniialTileState)
  })

  return state;
}

export const checkRow = createAsyncThunk<{}, undefined, { state: RootState }>(
  'rows/checkRow',
  async (_arg, thunkApi) => {
    if(thunkApi.getState().game.status !== GameStatus.PLAYING) return;

    const state = thunkApi.getState();
    const currentRow = state.rows.currentRow;
    const guess = state.rows[currentRow].guess

    if(guess.length !== TileCount) {
      thunkApi.dispatch(openToast('Not enough letters'))
      thunkApi.dispatch(startAnimation(RowAnimations.SHAKE))
      return thunkApi.rejectWithValue('Too Soon')
    } else if(!WordHelpers.wordExists(state.words.allWords, guess)) {
      thunkApi.dispatch(openToast('Not in word list'))
      thunkApi.dispatch(startAnimation(RowAnimations.SHAKE))
      return thunkApi.rejectWithValue('Bad Word')
    } else if(currentRow < RowCount) {
      const result = await thunkApi.dispatch(wordApi.endpoints.testWord.initiate(guess))

      //TODO: error handle instead of this!
      const testResults = result.data || [];
      if(testResults.length) {
        thunkApi.dispatch(updateLetters([guess, testResults]))
        thunkApi.dispatch(setTestResults(testResults))
      }
    }
  }
)

export const endTileAnimation = createAsyncThunk<void, number[], { state: RootState }>(
  'rows/endTileAnimation',
  (arg, thunkApi) => {
    const [row, tile] = arg;

    if(thunkApi.getState().rows[row][tile].animation === TileAnimations.FLIP_IN) {
      thunkApi.dispatch(updateDataState(arg))
    } else if(thunkApi.getState().rows[row][tile].animation === TileAnimations.FLIP_OUT && tile === TileCount - 1) {
      thunkApi.dispatch(checkStatus(row));
      thunkApi.dispatch(resetTileAnimation(arg))
    } else {
      thunkApi.dispatch(resetTileAnimation(arg))
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
        ...state[row][tile],
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
      state[row][tile] = iniialTileState;
    },
    setRowState: (state, action: PayloadAction<RowStates>) => {
      state.rowState = action.payload;
    },
    nextRow: (state) => {
      state.currentRow += 1
    },
    startAnimation: (state, action: PayloadAction<RowAnimations>) => {
      state[state.currentRow].animation = action.payload
    },
    endAnimation: (state, action: PayloadAction<number>) => {
      state[action.payload].animation = RowAnimations.IDLE
    },
    resetTileAnimation: (state, action: PayloadAction<number[]>) => {
      const [row, tile] = action.payload;
      state[row][tile].animation = TileAnimations.IDLE;
    },
    setTestResults: (state, action: PayloadAction<number[]>) => {
      const { currentRow } = state;

      state[currentRow].testResults = action.payload;

      action.payload.forEach((result, i) => {
        state[currentRow][i].testResult = result;
        state[currentRow][i].animation = TileAnimations.FLIP_IN;
      })
    },
    updateDataState: (state, action: PayloadAction<number[]>) => {
      const [row, tile] = action.payload;
      const datastateIndex = state[row][tile].testResult;
      state[row][tile].datastate = datastateMap[datastateIndex];
      state[row][tile].animation = TileAnimations.FLIP_OUT;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkRow.pending, (state) => { state.rowState = RowStates.PROCESSING }),
    builder.addCase(checkRow.fulfilled, (state) => { state.rowState = RowStates.PROCESSING }),
    builder.addCase(checkRow.rejected, (state) => { state.rowState = RowStates.IDLE })
  }
})

export const {
  addLetter,
  removeLetter,
  setRowState,
  nextRow,
  startAnimation,
  endAnimation,
  resetTileAnimation,
  setTestResults,
  updateDataState,
} = rowSlice.actions;

export const rowReducer = rowSlice.reducer;
