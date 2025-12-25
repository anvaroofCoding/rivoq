// 🔹 COMMON
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// 🔹 AUTH
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

// 🔹 USER
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

// 🔹 PAGINATION
export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}
