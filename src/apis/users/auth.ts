import { API_BASE_URL } from '../../constants';
import {
  LoginResponse,
  MyProfileResponse,
  RefreshResponse,
} from '../../schemas/users';
import { getResponseData } from '../../services/http';
import { StorageService } from '../../services/storage/storageService';
import { HttpMethods } from '../../types/apis';

const storageService = StorageService.instance

export const register = async (
  username: string,
  email: string,
  password: string,
  password2: string
) => {
  const config = {
    url: `${API_BASE_URL}/auth/register`,
    method: HttpMethods.POST,
    data: { username, email, password, password2 }
  }
  return await getResponseData(config)
}

export const confirmEmail = async (token: string) => {
  const config = {
    url: `${API_BASE_URL}/auth/confirm-email`,
    method: HttpMethods.GET,
    data: { token }
  }
  return await getResponseData(config)
}

export const login = async (username: string, password: string) => {
  const config = {
    url: `${API_BASE_URL}/auth/login`,
    method: HttpMethods.POST,
    data: { username, password }
  }
  return await getResponseData<LoginResponse>(config)
};


export const logout = async () => {
  const config = {
    url: `${API_BASE_URL}/auth/logout`,
    method: HttpMethods.POST,
    data: {
      access: storageService.get('access'),
      refresh:  storageService.get('refresh'),
    }
  }
  return await getResponseData(config)
};


export const refreshToken = async () => {
  const config = {
    url: `${API_BASE_URL}/auth/refresh`,
    method: HttpMethods.POST,
    data: {
      refresh: storageService.get('refresh'),
    }
  }
  return await getResponseData<RefreshResponse>(config)
};

export const getMyProfile = async () => {
  const config = {
    url: `${API_BASE_URL}/auth/me`,
    method: HttpMethods.GET,
  }
  return await getResponseData<MyProfileResponse>(config)
};
