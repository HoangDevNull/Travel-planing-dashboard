import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router'

import sample from './sample';
import theme from './theme';
import socket from './socket';
import auth from './auth';
import snackbar from './snackbar';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  sample,
  theme,
  socket,
  auth,
  snackbar
});

export default rootReducer;
