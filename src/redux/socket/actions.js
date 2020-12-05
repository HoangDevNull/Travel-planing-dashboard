import createAction from 'utils/createActions';

import { INIT_SOCKET } from './types';

export const socket = {
  loadSocket: (payload) => {
    return createAction(INIT_SOCKET.LOAD, payload);
  },
  setSocket: (payload) => {
    return createAction(INIT_SOCKET.SUCCESS, payload);
  },
  setError: (error) => {
    return createAction(INIT_SOCKET.ERROR, error);
  }
};
