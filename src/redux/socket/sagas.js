import { put, takeEvery } from 'redux-saga/effects';
import { INIT_SOCKET } from './types';
import { socket } from './actions';

function* handleSetSocket(action) {
  yield console.log(action);
  const { socketInstance, isAuthenticate } = action;
  yield put(socket.setSocket({ payload: { socketInstance, isAuthenticate } }));
}

export default function* watchTheme() {
  yield takeEvery(INIT_SOCKET.LOAD, handleSetSocket);
}
