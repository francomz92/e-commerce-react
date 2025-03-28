import { RawAxiosRequestConfig } from 'axios'

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export type RequestArgs = {
  url: string,
  method: HttpMethods,
  data?: Record<string, unknown> | FormData,
  headers?: RawAxiosRequestConfig['headers'],
}
