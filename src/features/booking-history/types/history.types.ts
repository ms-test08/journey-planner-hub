// src/features/booking-history/types/history.types.ts
export interface BookingHistoryItem {
  id: string;
  packageTitle: string;
  destination: string;
  startDate: string;
  endDate: string;
  guests: number;
  totalPrice: number;
  status: 'completed' | 'cancelled';
  paymentStatus: 'completed' | 'refunded';
}
