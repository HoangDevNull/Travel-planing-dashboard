import { combineReducers } from 'redux';

import sample from './sample';
import theme from './theme';
import socket from './socket';

const rootReducer = combineReducers({
  sample,
  theme,
  socket
});

export default rootReducer;
