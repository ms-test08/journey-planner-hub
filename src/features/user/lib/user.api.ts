// src/features/user/lib/user.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { UserProfile, UpdateProfileRequest } from '../types/user.types';

export const userApi = {
  getProfile: () =>
    apiClient.get<UserProfile>(API_ENDPOINTS.USER.PROFILE).then((r) => r.data),

  updateProfile: (data: UpdateProfileRequest) =>
    apiClient.put<UserProfile>(API_ENDPOINTS.USER.UPDATE, data).then((r) => r.data),
};
