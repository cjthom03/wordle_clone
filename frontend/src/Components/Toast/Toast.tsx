import * as React from 'react';
import styled from 'styled-components';
import { Snackbar as MuiSnackbar } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { closeToast } from '../../Reducers/toastReducer';

const Snackbar = styled((props) => <MuiSnackbar {...props} />)(({theme}) => ({
  "&&& .MuiSnackbarContent-root": {
    minWidth: '100px',
    justifyContent: 'center',
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
  }
}))


export const Toast = () => {
  const { open, message } = useAppSelector((state) => state.toast)
  const dispatch = useAppDispatch();

  return(
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={() => dispatch(closeToast())}
      autoHideDuration={1000}
      message={message}
    />
  )
}
