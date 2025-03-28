import { API_ADMIN } from '../../../constants';
import {
  CategoryCreationBody,
  CategoryResponse,
  CategoryUpdateBody,
} from '../../../schemas/store';
import { getResponseData } from '../../../services/http';
import { HttpMethods } from '../../../types/apis';

export const createCategory = async (data: CategoryCreationBody) => {
  const config = {
    url: `${API_ADMIN}/categories/`,
    method: HttpMethods.POST,
    data: data
  }
  return await getResponseData<CategoryResponse>(config)
};

export const updateCategory = async (id: string, data: CategoryUpdateBody) => {
  const config = {
    url: `${API_ADMIN}/categories/${id}/`,
    method: HttpMethods.PUT,
    data: data
  }
  return await getResponseData<CategoryResponse>(config)
};