import { BaseQueryParams } from '../baseQueryParams';
import { TinyUser } from '../users';
import { OrderDetail } from './orderDetails';

export interface OrdersQueryParams extends BaseQueryParams {
  id?: string
  user_id?: string
  user_username?: string
}

export enum OrderType {
  WEB = 'web',
  LOCAL = 'local',
}

//* Responses

export interface OrderResponse {
  id: string
  user: TinyUser
  code: string
  tracking_code: string
  type: string
  total_price: number
  finished: boolean
  order_date: string
  details: OrderDetail[]
}