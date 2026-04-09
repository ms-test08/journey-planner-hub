// src/features/admin-dashboard/lib/useAdmin.ts
import { useQuery } from '@tanstack/react-query';
import { adminApi } from './admin.api';
import { QUERY_KEYS } from '../../../core/lib/query-keys';

export const useAdminStats = () =>
  useQuery({ queryKey: QUERY_KEYS.ADMIN_STATS, queryFn: adminApi.getStats });

export const useAdminUsers = () =>
  useQuery({ queryKey: QUERY_KEYS.ADMIN_USERS, queryFn: adminApi.getUsers });

export const useAdminBookings = () =>
  useQuery({ queryKey: QUERY_KEYS.ADMIN_BOOKINGS, queryFn: adminApi.getBookings });
