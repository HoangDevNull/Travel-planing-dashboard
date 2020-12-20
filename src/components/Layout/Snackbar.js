import React from 'react';

import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { useDispatch, useSelector } from 'react-redux';

import { snackbarAction } from 'redux/snackbar';

const SnackbarCustom = () => {
  const dispatch = useDispatch();
  // 'error'| 'info'| 'success'| 'warning'
  const { open, content, type } = useSelector((state) => state.snackbar);

  const handleClose = () => {
    dispatch(snackbarAction.close());
  };

  return (
    <Snackbar
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type}>
        {content}
      </Alert>
    </Snackbar>
  );
};

export default React.memo(SnackbarCustom);
