import { takeLatest, put, call } from 'redux-saga/effects';
import { LOGIN } from './types';
import { loginAction } from './actions';
import { request, LOGIN_URL } from 'utils/apiRequest';

import { snackbarAction } from '../snackbar';

import { setCookie } from 'utils/cookies';

const user = {
  access_token: 'asdawdasdawd',
  role: 'admin',
  statusAccount: 'not activated',
  isLoggedIn: true,
  userProfile: {
    lastName: 'admin',
    avatar: 'https://material-ui.com/static/images/avatar/2.jpg'
  }
};

function* handleLogin(action) {
  try {
    const { payload } = action;
    const email = payload?.email;
    const password = payload?.password;

    if (email !== 'admin@onism.net' || password !== 'admin123') {
      throw new Error('Email hoặc mật khẩu không chính xác !');
    }

    yield put(loginAction.setLogin(user));
    setCookie('auth', user);
  } catch (err) {
    const content = 'Email hoặc mật khẩu không chính xác !';

    yield put(
      snackbarAction.open({
        content,
        type: 'error'
      })
    );
    yield put(loginAction.setError(content));
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN.LOAD, handleLogin);
}
