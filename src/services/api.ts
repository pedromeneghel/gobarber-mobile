import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.10.30.200:3333',
});

export default api;
