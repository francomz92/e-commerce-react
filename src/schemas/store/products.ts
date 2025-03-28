import { BaseQueryParams } from '../baseQueryParams';
import { Category } from './categories';

export interface ProductsQueryParams extends BaseQueryParams {
  name?: string
  slug?: string
  barcode?: string
  price?: number
  categories?: string[]
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  barcode: string
  price: number
  image: string
  categories: Category[]
  in_offer: boolean
  discount: number
  created_at: string
  price_with_discount: number
}

//* Requests

export interface ProductCreationBody extends Record<string, unknown> {
  name: string
  slug: string
  description: string
  barcode: string
  price: number
  categories: Category[]
  in_offer: boolean
  discount: number
}

export interface ProductUpdateBody extends Record<string, unknown> {
  name?: string
  slug?: string
  description?: string
  barcode?: string
  price?: number
  categories?: Category[]
  in_offer?: boolean
  discount?: number
}

//* Responses

export interface ProductResponse {
  id: string
  name: string
  slug: string
  description: string
  barcode: string
  price: number
  image: string
  categories: Category[]
  in_offer: boolean
  discount: number
  created_at: string
  price_with_discount: number
}