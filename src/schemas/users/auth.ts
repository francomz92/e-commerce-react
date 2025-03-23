export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface RefreshResponse {
  access: string;
  refresh: string;
}

export interface MyProfileResponse {
  username: string;
  email: string;
  id: string;
  roles: [{ name: string, id: string }];
}
