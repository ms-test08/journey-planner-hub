// src/features/booking/constants/booking.constants.ts
export const BOOKING_LABELS = {
  TITLE: 'Book Your Trip',
  SUBTITLE: 'Complete your booking details',
  START_DATE: 'Start Date',
  END_DATE: 'End Date',
  GUESTS: 'Number of Guests',
  TOTAL: 'Total Price',
  CONFIRM: 'Confirm Booking',
  CANCEL: 'Cancel Booking',
  STATUS: {
    pending: 'Pending',
    confirmed: 'Confirmed',
    cancelled: 'Cancelled',
    completed: 'Completed',
  },
} as const;
