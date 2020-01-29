import {POST_NEW_USER, POST_NEW_USER_ERR} from '../Actions/users';

// signup reducer
export function signup(state = {}, {type, payload}) {
  switch (type) {
    case POST_NEW_USER: {
      return {
        ...state,
        msg: payload.res,
      };
    }
    case POST_NEW_USER_ERR: {
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
