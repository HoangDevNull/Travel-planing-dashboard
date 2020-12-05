/**
 * Todo: Calling api in here
 */

import axios from 'axios';
import { ROOT_API } from 'config';

export const request = (url, method, payload = {}) => {
  return axios({
    method: method,
    url: `${ROOT_API}/api/${url}`,
    data: payload
  });
};

export const authRequest = (url, method, token, payload = {}) => {
  return axios({
    method: method,
    url: `${ROOT_API}/api/${url}`,
    data: payload,
    headers: {
      Authorization: token
    }
  });
};

const LOGIN_URL = 'login';
const LOGOUT_URL = 'logout';

export { LOGIN_URL, LOGOUT_URL };
