import axios, { AxiosError } from 'axios';
import { API_BASE_URL, DEV_MODE } from '../constants';
import { StorageService } from '../services/storage/storageService';
import { refreshToken } from './users/auth';


const storageService = StorageService.instance

let refreshingToken = false

export const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

request.interceptors.request.use((config) => {
  const accessToken = storageService.get('access');
  if (accessToken) {
    config.headers.Authorization = `JWT ${accessToken}`;
  }
  return config
})

request.interceptors.response.use(
  (response) => {
    return response
  }, async (error: AxiosError) => {
    const config = error.config!

    if (
      error.response?.status === 401 &&
      !refreshingToken
    ) {
      refreshingToken = true
      try {
        const renewalToken = storageService.get('refresh');
        if (!renewalToken) {
          throw new Error('Refresh token not found');
        }
        const response = await refreshToken()
        if (!response.data) {
          throw new Error('Failed to refresh token');
        }
        storageService.set('access', response.data.access);
        storageService.set('refresh', response.data.refresh);
      } catch (error) {
        if (DEV_MODE && error instanceof Error) {
          console.error(error.message);
        }
        storageService.clear();
        window.location.href = '/login';
        return
      } finally {
        refreshingToken = false
      }
      return request(config);
    }
    return Promise.reject(error.response?.data);
  }
);