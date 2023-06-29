import axios from 'react-native-axios';

const api = axios.create({
  baseURL: 'http://192.168.0.28:1337/api',
});

export default api;
