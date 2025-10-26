export interface UserData {
  id: number;
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
}

export interface UserResponse {
  success: boolean;
  message: string;
  error: boolean;
  data?: UserData[];
}
