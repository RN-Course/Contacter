import {
  POST_NEW_USER,
  POST_NEW_USER_ERR,
  LOGIN_USER,
  LOGIN_USER_ERR,
} from '../Actions/users';

// signup reducer
export function auth(state = {}, {type, payload}) {
  switch (type) {
    case POST_NEW_USER: {
      return {
        ...state,
        msg: payload.data,
      };
    }
    case POST_NEW_USER_ERR: {
      return {
        ...state,
        msg: payload.err,
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        loginData: payload.data,
      };
    }
    case LOGIN_USER_ERR: {
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
