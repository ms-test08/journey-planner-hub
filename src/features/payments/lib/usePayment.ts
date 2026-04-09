// src/features/payments/lib/usePayment.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { paymentApi } from './payment.api';
import { QUERY_KEYS } from '../../../core/lib/query-keys';
import { toast } from 'sonner';

export const usePayments = () =>
  useQuery({ queryKey: QUERY_KEYS.PAYMENTS, queryFn: paymentApi.list });

export const useCreatePayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: paymentApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PAYMENTS });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.BOOKINGS });
      toast.success('Payment successful!');
    },
    onError: () => toast.error('Payment failed. Please try again.'),
  });
};
