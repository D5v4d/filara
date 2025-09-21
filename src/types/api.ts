export interface AuthRequest {
  email: string;
  password: string;
}

export interface Account {
  id: 1;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface AuthResponse {
  access_token: string;
  user_data: Account;
}
