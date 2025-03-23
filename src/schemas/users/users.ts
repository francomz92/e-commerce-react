interface Role {
  id: string;
  name: string;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
  roles: Role[];
}

export interface UsersQueryParams extends Record<string, unknown> {
  username?: string;
  email?: string;
  role?: string[];
  is_active?: boolean;
  is_admin?: boolean;
  order_by?: string;
  skip?: number;
  limit?: number;
}