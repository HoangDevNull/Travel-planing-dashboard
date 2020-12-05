import createAction from 'utils/createActions';

import { THEME } from './types';

export const theme = {
  loadTheme: (isDark) => {
    return createAction(THEME.LOAD, { isDark });
  },
  setTheme: (isDark) => {
    return createAction(THEME.SUCCESS, { payload: isDark });
  },
  setError: (error) => {
    return createAction(THEME.ERROR, error);
  }
};
