import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { AsynsStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'https://c81f519c2702.ngrok.io',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
