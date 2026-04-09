// src/features/auth/lib/auth.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { AuthResponse } from '../../../core/auth/types';
import type { LoginFormValues, RegisterFormValues } from '../types/auth.types';

export const authApi = {
  login: (data: LoginFormValues) =>
    apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, data).then((r) => r.data),

  register: (data: Omit<RegisterFormValues, 'confirmPassword'>) =>
    apiClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, data).then((r) => r.data),

  logout: () =>
    apiClient.post(API_ENDPOINTS.AUTH.LOGOUT).then((r) => r.data),
};
