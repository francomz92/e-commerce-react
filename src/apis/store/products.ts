import { API_BASE_URL } from '../../constants';
import { ProductResponse, ProductsQueryParams } from '../../schemas/store';
import { getResponseData } from '../../services/http';
import { HttpMethods } from '../../types/apis';

export const getProducts = async (params?: ProductsQueryParams) => {
  const config = {
    url: `${API_BASE_URL}/products`,
    method: HttpMethods.GET,
    data: params ?? {}
  }
  return await getResponseData<ProductResponse[]>(config)
};

export const getProduct = async (id: string) => {
  const config = {
    url: `${API_BASE_URL}/products/${id}`,
    method: HttpMethods.GET,
  }
  return await getResponseData<ProductResponse>(config)
};