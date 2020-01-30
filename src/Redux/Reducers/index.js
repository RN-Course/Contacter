import {combineReducers} from 'redux';
import {auth} from '../Reducers/user';
import {downloadUsers} from '../Reducers/download';

export default combineReducers({auth, downloadUsers});
