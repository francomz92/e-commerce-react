import { API_BASE_URL } from '../../constants';
import { UserResponse, UsersQueryParams } from '../../schemas/users';
import { getResponseData } from '../../services/http';
import { HttpMethods } from '../../types/apis';


export const getUsers = async (params?: UsersQueryParams) => {
  const config = {
    url: `${API_BASE_URL}/users`,
    method: HttpMethods.GET,
    data: params ?? {}
  }
  return await getResponseData<UserResponse[]>(config);
}

export const getUser = async (id: string) => {
  const config = {
    url: `${API_BASE_URL}/users/${id}`,
    method: HttpMethods.GET,
  }
  return await getResponseData<UserResponse>(config);
};
