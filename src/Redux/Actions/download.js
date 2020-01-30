export const DOWNLOAD_USERS = 'DOWNLOAD_USERS';
export const DOWNLOAD_USERS_ERR = 'DOWNLOAD_USERS_ERR';

import {postData} from '../../utils/axios';

export function downloadUsers(data) {
  let post = postData(data, 'api/');
  return function(dispatch) {
    post
      .then(res => {
        dispatch({type: DOWNLOAD_USERS, payload: res.data});
      })
      .catch(err => {
        dispatch({type: DOWNLOAD_USERS_ERR, payload: err});
      });
  };
}
