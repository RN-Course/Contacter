import axios from 'axios';
import {API_URI} from '../config';

export function postData(data, route) {
  return axios.post(`${API_URI}/${route}`, data);
}
