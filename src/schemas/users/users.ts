import { BaseQueryParams } from '../baseQueryParams';

interface Role {
  id: string;
  name: string;
}

export interface TinyUser {
  id: string;
  username: string;
  email: string;
}

export interface UsersQueryParams extends BaseQueryParams {
  username?: string;
  email?: string;
  role?: string[];
  is_active?: boolean;
  is_admin?: boolean;
}

//* Responses

export interface UserResponse extends TinyUser {
  is_active?: boolean;
  is_admin?: boolean;
  roles: Role[];
}
