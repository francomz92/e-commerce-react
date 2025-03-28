import { API_BASE_URL } from '../../constants';
import {
  OrderResponse,
  OrdersQueryParams,
  OrderType,
} from '../../schemas/orders/orders';
import { getResponseData } from '../../services/http';
import { HttpMethods } from '../../types/apis';

export const getOrders = async (params?: OrdersQueryParams) => {
  const config = {
    url: `${API_BASE_URL}/orders`,
    method: HttpMethods.GET,
    data: params ?? {}
  }
  return await getResponseData<OrderResponse[]>(config)
};

export const getOrder = async (id: string) => {
  const config = {
    url: `${API_BASE_URL}/orders/${id}`,
    method: HttpMethods.GET,
  }
  return await getResponseData<OrderResponse>(config)
};

export const deleteOrder = async (id: string, type: OrderType) => {
  const config = {
    url: `${API_BASE_URL}/orders/${id}`,
    method: HttpMethods.DELETE,
    data: { type }
  }
  return await getResponseData(config)
};

export const updateItemQuantity = async (
  orderId: string,
  itemId: string,
  quantity: number,
) => {
  const config = {
    url: `${API_BASE_URL}/orders/${orderId}/items/${itemId}`,
    method: HttpMethods.PUT,
    data: { quantity }
  }
  return await getResponseData<OrderResponse>(config)
};

export const deleteItem = async (orderId: string, itemId: string) => {
  const config = {
    url: `${API_BASE_URL}/orders/${orderId}/items/${itemId}`,
    method: HttpMethods.DELETE,
  }
  return await getResponseData(config)
};