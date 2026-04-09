// src/features/booking/types/booking.types.ts
export interface Booking {
  id: string;
  packageId: string;
  packageTitle: string;
  destination: string;
  startDate: string;
  endDate: string;
  guests: number;
  totalPrice: number;
  status: BookingStatus;
  createdAt: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface CreateBookingRequest {
  packageId: string;
  startDate: string;
  endDate: string;
  guests: number;
}
