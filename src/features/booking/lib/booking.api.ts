// src/features/booking/lib/booking.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { Booking, CreateBookingRequest } from '../types/booking.types';

export const bookingApi = {
  create: (data: CreateBookingRequest) =>
    apiClient.post<Booking>(API_ENDPOINTS.BOOKING.CREATE, data).then((r) => r.data),

  list: () =>
    apiClient.get<Booking[]>(API_ENDPOINTS.BOOKING.LIST).then((r) => r.data),

  getDetail: (id: string) =>
    apiClient.get<Booking>(API_ENDPOINTS.BOOKING.DETAIL(id)).then((r) => r.data),

  cancel: (id: string) =>
    apiClient.post<Booking>(API_ENDPOINTS.BOOKING.CANCEL(id)).then((r) => r.data),
};
