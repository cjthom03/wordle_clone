import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

export interface ToastState {
  open: boolean,
  message: string,
  sticky: boolean,
}

export interface OpenToast {
  message: string,
  sticky?: boolean,
}

const initialToastState: ToastState = {
  open: false,
  message: '',
  sticky: false,
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState: initialToastState,
  reducers: {
    openToast: (state, action: PayloadAction<OpenToast>) => {
      state.open = true;
      state.message = action.payload.message;
      state.sticky = action.payload.sticky || false;
    },
    closeToast: (state) => {
      state.open = initialToastState.open
    }
  }
})

export const { openToast, closeToast } = toastSlice.actions

export const toastReducer = toastSlice.reducer
