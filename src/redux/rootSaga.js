import { all, fork } from 'redux-saga/effects';

import { sampleSaga } from './sample';
import { themeSaga } from './theme';
import { socketSaga } from './socket';
import { authSaga } from './auth';

export default function* () {
  yield all([
    fork(sampleSaga),
    fork(themeSaga),
    fork(socketSaga),
    fork(authSaga)
  ]);
}
