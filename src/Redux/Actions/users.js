export const POST_NEW_USER = 'POST_NEW_USER';
export const POST_NEW_USER_ERR = 'POST_NEW_USER_ERR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_ERR = 'LOGIN_USER_ERR';

import {postData} from '../../utils/axios';

export function signup(data) {
  let post = postData(data, 'api/users/signup');
  return function(dispatch) {
    post
      .then(res => {
        dispatch({type: POST_NEW_USER, payload: res});
      })
      .catch(err => {
        dispatch({type: POST_NEW_USER_ERR, payload: err});
      });
  };
}

export function login(data) {
  let loginRequest = postData(data, 'api/users/login');
  return function(dispatch) {
    loginRequest
      .then(res => {
        dispatch({type: LOGIN_USER, payload: res});
      })
      .catch(err => {
        dispatch({type: LOGIN_USER_ERR, payload: err});
      });
  };
}
