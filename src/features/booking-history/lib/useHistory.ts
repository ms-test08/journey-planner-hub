// src/features/booking-history/lib/useHistory.ts
import { useQuery } from '@tanstack/react-query';
import { historyApi } from './history.api';
import { QUERY_KEYS } from '../../../core/lib/query-keys';

export const useBookingHistory = () =>
  useQuery({ queryKey: QUERY_KEYS.BOOKING_HISTORY, queryFn: historyApi.list });
