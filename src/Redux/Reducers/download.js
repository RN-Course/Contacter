import {
    DOWNLOAD_USERS,
    DOWNLOAD_USERS_ERR
  } from '../Actions/download';
  
  // signup reducer
  export function downloadUsers(state = {}, {type, payload}) {
    switch (type) {
      case DOWNLOAD_USERS: {
        return {
          ...state,
          msg: payload.res,
        };
      }
      case DOWNLOAD_USERS_ERR: {
        return {
          ...state,
          msg: payload.err,
        };
      }
      default: {
        return state;
      }
    }
  }
  