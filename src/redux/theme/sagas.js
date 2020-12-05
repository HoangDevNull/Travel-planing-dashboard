import { put, takeEvery } from 'redux-saga/effects';
import { THEME } from './types';
import { theme } from './actions';

function* handleSetTheme({ isDark }) {
  yield put(theme.setTheme(isDark));
}

export default function* watchTheme() {
  yield takeEvery(THEME.LOAD, handleSetTheme);
}
