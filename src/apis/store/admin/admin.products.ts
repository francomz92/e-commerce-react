import { API_ADMIN } from '../../../constants';
import {
  ProductCreationBody,
  ProductResponse,
  ProductUpdateBody,
} from '../../../schemas/store';
import { getResponseData } from '../../../services/http';
import { HttpMethods } from '../../../types/apis';

export const createProduct = async (data: ProductCreationBody) => {
  const config = {
    url: `${API_ADMIN}/products`,
    method: HttpMethods.POST,
    data: data
  }
  return await getResponseData<ProductResponse>(config)
};

export const updateProduct = async (id: string, data: ProductUpdateBody) => {
  const config = {
    url: `${API_ADMIN}/products/${id}`,
    method: HttpMethods.PUT,
    data: data
  }
  return await getResponseData<ProductResponse>(config)
};

export const deleteProduct = async (id: string) => {
  const config = {
    url: `${API_ADMIN}/products/${id}`,
    method: HttpMethods.DELETE,
  }
  return await getResponseData(config)
};

export const uploadProductImage = async (id: string, data: FormData) => {
  const config = {
    url: `${API_ADMIN}/products/${id}/upload`,
    method: HttpMethods.POST,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  return await getResponseData(config)
};