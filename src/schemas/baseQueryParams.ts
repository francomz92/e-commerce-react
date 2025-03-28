export interface BaseQueryParams extends Record<string, unknown> {
  skip?: number;
  limit?: number;
  order_by?: string;
}