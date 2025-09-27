export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user_data: {
    id: 1;
    name: string;
    email: string;
    password: string;
    role: string;
  };
}
