import { BaseQueryParams } from '../baseQueryParams';

export interface CategoriesQueryParams extends BaseQueryParams {
  name?: string
  slug?: string
  in_offer?: boolean
  discount?: number
}

export interface Category {
  id: string
  name: string
  slug: string
  in_offer: boolean 
  discount: number
}

//* Responses

export interface CategoryResponse {
  id: string
  name: string
  slug: string
  in_offer: boolean 
  discount: number
}


//* Requests

export interface CategoryCreationBody extends Record<string, unknown> {
  name: string
  slug: string
  in_offer: boolean
  discount: number
}

export interface CategoryUpdateBody extends Record<string, unknown> {
  name?: string
  slug?: string
  in_offer?: boolean
  discount?: number
}