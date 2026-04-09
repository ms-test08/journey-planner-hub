// src/features/payments/lib/payment.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { Payment, CreatePaymentRequest } from '../types/payment.types';

export const paymentApi = {
  create: (data: CreatePaymentRequest) =>
    apiClient.post<Payment>(API_ENDPOINTS.PAYMENTS.CREATE, data).then((r) => r.data),

  list: () =>
    apiClient.get<Payment[]>(API_ENDPOINTS.PAYMENTS.LIST).then((r) => r.data),

  getDetail: (id: string) =>
    apiClient.get<Payment>(API_ENDPOINTS.PAYMENTS.DETAIL(id)).then((r) => r.data),
};
