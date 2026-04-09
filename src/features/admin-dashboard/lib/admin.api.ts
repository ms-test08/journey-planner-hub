// src/features/admin-dashboard/lib/admin.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { DashboardStats, AdminUser } from '../types/admin.types';
import type { Booking } from '../../booking/types/booking.types';

export const adminApi = {
  getStats: () =>
    apiClient.get<DashboardStats>(API_ENDPOINTS.ADMIN.DASHBOARD_STATS).then((r) => r.data),

  getUsers: () =>
    apiClient.get<AdminUser[]>(API_ENDPOINTS.ADMIN.USERS).then((r) => r.data),

  getBookings: () =>
    apiClient.get<Booking[]>(API_ENDPOINTS.ADMIN.BOOKINGS).then((r) => r.data),
};
