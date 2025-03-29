import { request } from '../../apis/config';
import { SimpleDetailResponse } from '../../schemas/common/responses';
import { RequestArgs } from '../../types/apis';

const requestActions: Record<string, CallableFunction> = {
  GET: async (config: RequestArgs) => {
    return await request.get(
      config.url,
      { params: config.data, headers: config.headers }
    );
  },
  POST: async (config: RequestArgs) => {
    return await request.post(
      config.url,
      config.data,
      { headers: config.headers }
    );
  },
  PUT: async (config: RequestArgs) => {
    return await request.put(
      config.url,
      config.data,
      { headers: config.headers }
    );
  },
  PATCH: async (config: RequestArgs) => {
    return await request.patch(
      config.url,
      config.data,
      { headers: config.headers }
    );
  },
  DELETE: async (config: RequestArgs) => {
    return await request.delete(
      config.url,
      { params: config.data, headers: config.headers }
    );
  }
}

export const getResponseData = async <T>(config: RequestArgs) => {
  try {
    const response = await requestActions[config.method](config);
    const data: T = response.data
    return { data };
  } catch (error) {
    return { error: error as SimpleDetailResponse };
  }
}