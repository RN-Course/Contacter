export const POST_NEW_USER = 'POST_NEW_USER';
export const POST_NEW_USER_ERR = 'POST_NEW_USER_ERR';

import {postData} from '../../utils/axios';

export function signup(data) {
  return dispatch => {
    postData(data, 'user')
      .then(res => {
        dispatch({type: POST_NEW_USER, payload: res});
      })
      .catch(err => {
        dispatch({type: POST_NEW_USER_ERR, payload: err});
      });
  };
}
