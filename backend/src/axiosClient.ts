import axios, { AxiosInstance } from 'axios';
import { env } from './constants/env';

const { authToken, url } = env;

export const apiClient: AxiosInstance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  },
});
