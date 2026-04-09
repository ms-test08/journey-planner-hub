// src/features/booking-history/lib/history.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { BookingHistoryItem } from '../types/history.types';

export const historyApi = {
  list: () =>
    apiClient.get<BookingHistoryItem[]>(API_ENDPOINTS.BOOKING.LIST, { params: { history: true } }).then((r) => r.data),
};
