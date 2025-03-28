import { Product } from '../store';

export interface OrderDetail {
  id: string;
  product: Product;
  unit_price: number;
  quantity: number;
  price: number;
}