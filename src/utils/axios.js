import Axios from 'axios';
import {API_URI} from '../config';

export async function postData(data, uri) {
  let response = await Axios.post(`${API_URI}/${uri}`, data);
  if (response) {
    return response;
  } else {
    return `cannot post to ${API_URI}`;
  }
}
