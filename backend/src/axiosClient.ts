import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { env } from './constants/env';

const { authToken, uri } = env;

const apiClient: AxiosInstance = axios.create({
  baseURL: uri,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  },
});

export async function makeApiRequest<T>(
  path: string,
  params?: object,
): Promise<AxiosResponse<T>> {
  return apiClient.get<T>(path, { params });
}
