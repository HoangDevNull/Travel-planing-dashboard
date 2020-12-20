import createAction from 'utils/createActions';

import { LOGIN, LOGOUT } from './types';

export const loginAction = {
  loadLogin: (payload) => {
    return createAction(LOGIN.LOAD, { payload });
  },
  setLogin: (payload) => {
    return createAction(LOGIN.SUCCESS, { payload });
  },
  setError: (error) => {
    return createAction(LOGIN.ERROR, { error });
  }
};
export const logoutAction = {
  loadLogout: () => {
    return createAction(LOGOUT.LOAD);
  },
  setLogout: () => {
    return createAction(LOGOUT.SUCCESS);
  },
  setError: (error) => {
    return createAction(LOGOUT.ERROR, { error });
  }
};
