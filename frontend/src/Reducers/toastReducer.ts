import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

export interface ToastState {
  open: boolean,
  message: string,
}

const initialToastState: ToastState = {
  open: false,
  message: '',
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState: initialToastState,
  reducers: {
    openToast: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.message = action.payload;
    },
    closeToast: (state) => {
      state.open = initialToastState.open
    }
  }
})

export const { openToast, closeToast } = toastSlice.actions

export const toastReducer = toastSlice.reducer
