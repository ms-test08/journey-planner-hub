// src/features/booking/lib/useBooking.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingApi } from './booking.api';
import { QUERY_KEYS } from '../../../core/lib/query-keys';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useBookings = () =>
  useQuery({ queryKey: QUERY_KEYS.BOOKINGS, queryFn: bookingApi.list });

export const useBookingDetail = (id: string) =>
  useQuery({
    queryKey: QUERY_KEYS.BOOKING_DETAIL(id),
    queryFn: () => bookingApi.getDetail(id),
    enabled: !!id,
  });

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: bookingApi.create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.BOOKINGS });
      toast.success('Booking created successfully!');
      navigate(`/payments?bookingId=${data.id}`);
    },
    onError: () => toast.error('Failed to create booking'),
  });
};

export const useCancelBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookingApi.cancel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.BOOKINGS });
      toast.success('Booking cancelled');
    },
    onError: () => toast.error('Failed to cancel booking'),
  });
};
