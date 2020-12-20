import { LOGIN, LOGOUT } from './types';

import { getCookie } from 'utils/cookies';
let initState = {};
const authCookie = getCookie('auth');
if (authCookie) {
  initState = JSON.parse(decodeURIComponent(authCookie));
} else {
  initState = {
    access_token: null,
    role: null,
    statusAccount: null,
    isLoggedIn: false,
    userProfile: null,
    error: null
  };
}

// For dev without server --- Cmt it if have server
// initState = {
//   access_token: 'asdawdasdawd',
//   role: 'admin',
//   statusAccount: 'not activated',
//   isLoggedIn: true,
//   userProfile: {
//     lastName: 'admin',
//     avatar: 'https://material-ui.com/static/images/avatar/2.jpg'
//   },
//   error: null
// };

initState.loading = false;

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN.LOAD:
      return {
        ...state,
        loading: true
      };

    case LOGIN.SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null
      };
    case LOGOUT.SUCCESS:
      return {
        access_token: null,
        role: null,
        statusAccount: null,
        isLoggedIn: false,
        userProfile: null,
        error: null
      };
    case LOGIN.ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
