import { REACT_APP_PUBLIC_URL_LOCAL, REACT_APP_PUBLIC_URL_PROD } from '@env';
import { AppError } from '@utils/AppError';
import axios from 'axios';

let baseURL = REACT_APP_PUBLIC_URL_LOCAL;

if (process.env.NODE_ENV !== 'development') baseURL = REACT_APP_PUBLIC_URL_PROD;

const api = axios.create({
  baseURL
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.errors));
    } else {
      return Promise.reject(error);
    }
  }
);

export { api };
