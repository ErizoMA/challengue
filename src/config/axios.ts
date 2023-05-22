import axios from 'axios';
import { API_URL } from './constants';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

export default instance;
