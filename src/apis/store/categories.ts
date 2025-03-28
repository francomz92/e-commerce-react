import { API_BASE_URL } from '../../constants';
import {
  CategoriesQueryParams,
  CategoryResponse,
} from '../../schemas/store';
import { getResponseData } from '../../services/http';
import { HttpMethods } from '../../types/apis';

export const getCategories = async (params?: CategoriesQueryParams) => {
  const config = {
    url: `${API_BASE_URL}/categories`,
    method: HttpMethods.GET,
    data: params ?? {}
  }
  return await getResponseData<CategoryResponse[]>(config)
};

export const getCategory = async (id: string) => {
  const config = {
    url: `${API_BASE_URL}/categories/${id}`,
    method: HttpMethods.GET,
  }
  return await getResponseData<CategoryResponse>(config)
};