import { createSlice, PayloadAction, createAsyncThunk  } from '@reduxjs/toolkit'

import { RootState } from '../store';
import { setRowState, nextRow } from '../Reducers/rowReducer';
import { openToast } from '../Reducers/toastReducer';
import { RowCount } from '../Components/Board/Board';
import { RowStates, letterTestToDatastate, DataStates, GameStatus } from '../Types';
import { wordApi } from '../Services/words';

export interface GameState {
  status: GameStatus
}

const initialGameState: GameState = {
  status: GameStatus.PLAYING
}

const winMessage = (row: number): string => {
  let message = 'You did it!';

  if(row === RowCount - 1) {
    message = 'Phew'
  } else if(row === RowCount - 2) {
    message = 'That was close...'
  }

  return message;
}

export const checkStatus = createAsyncThunk<void, number, { state: RootState }>(
  'game/checkStatus',
  async (row, thunkApi) => {
    const testResults = thunkApi.getState().rows[row].testResults;
    const won = testResults.every((result) => result === letterTestToDatastate[DataStates.CORRECT])

    if(won) {
      thunkApi.dispatch(setStaus(GameStatus.WON))
      thunkApi.dispatch(setRowState(RowStates.COMPLETE))
      thunkApi.dispatch(openToast({ message: winMessage(row) }))
    } else if(row === RowCount - 1) {
      thunkApi.dispatch(setStaus(GameStatus.LOST))
      thunkApi.dispatch(setRowState(RowStates.COMPLETE))
      const correctWord = await thunkApi.dispatch(wordApi.endpoints.getWord.initiate())
      thunkApi.dispatch(openToast({ message: `The word was ${correctWord.data}`, sticky: true }))
    } else {
      thunkApi.dispatch(nextRow())
      thunkApi.dispatch(setRowState(RowStates.IDLE))
    }
  }
)

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    setStaus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
  }
})

export const { setStaus } = gameSlice.actions

export const gameReducer = gameSlice.reducer
