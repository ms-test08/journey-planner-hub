// src/features/payments/types/payment.types.ts
export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  method: string;
  createdAt: string;
}

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface CreatePaymentRequest {
  bookingId: string;
  method: string;
}
