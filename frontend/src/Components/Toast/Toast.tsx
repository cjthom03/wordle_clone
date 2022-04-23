import * as React from 'react';
import styled from 'styled-components';
import { Snackbar as MuiSnackbar, Fade } from '@mui/material';

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
  const { open, message, sticky } = useAppSelector((state) => state.toast)
  const dispatch = useAppDispatch();
  const autoHideDuration = sticky ? null : 1000;

  return(
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={() => dispatch(closeToast())}
      autoHideDuration={autoHideDuration}
      TransitionComponent={Fade}
      transitionDuration={{ exit: 350 }}
      message={message}
    />
  )
}
