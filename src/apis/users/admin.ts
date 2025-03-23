import { API_ADMIN } from '../../constants';
import {
  UserResponse,
  UsersQueryParams,
} from '../../schemas/users';
import { getResponseData } from '../../services/http';
import { HttpMethods } from '../../types/apis';



export const getAllUsers = async (params?: UsersQueryParams) => {
  const config = {
    url: `${API_ADMIN}/users`,
    method: HttpMethods.GET,
    data: params ?? {}
  }
  return await getResponseData<UserResponse[]>(config)
};

export const getUser = async (id: string) => {
  const config = {
    url: `${API_ADMIN}/users/${id}`,
    method: HttpMethods.GET,
  }
  return await getResponseData<UserResponse>(config)
};

export const createUser = async (
  username: string,
  email: string,
  roles: string[],
  password: string,
  is_admin?: boolean,
  is_active?: boolean,
) => {
  const config = {
    url: `${API_ADMIN}/users/`,
    method: HttpMethods.POST,
    data: { username, email, roles, password, is_admin, is_active },
  }
  return await getResponseData<UserResponse>(config)
};

export const updateUser = async (
  id: string,
  username: string,
  email: string,
  roles: string[],
  is_admin?: boolean,
  is_active?: boolean,
) => {
  const config = {
    url: `${API_ADMIN}/users/${id}`,
    method: HttpMethods.PUT,
    data: { username, email, roles, is_admin, is_active },
  }
  return await getResponseData<UserResponse>(config)
};