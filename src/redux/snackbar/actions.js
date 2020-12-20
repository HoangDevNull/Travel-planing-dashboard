import createAction from 'utils/createActions';

import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from './types';

export const snackbarAction = {
  open: (payload) => {
    return createAction(OPEN_SNACKBAR, { payload });
  },
  close: () => {
    return createAction(CLOSE_SNACKBAR);
  }
};
