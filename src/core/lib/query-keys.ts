// src/core/lib/query-keys.ts
export const QUERY_KEYS = {
  USER_PROFILE: ['user', 'profile'] as const,
  TRAVEL_SEARCH: (params: Record<string, string>) => ['travel', 'search', params] as const,
  DESTINATIONS: ['travel', 'destinations'] as const,
  PACKAGES: ['travel', 'packages'] as const,
  PACKAGE_DETAIL: (id: string) => ['travel', 'packages', id] as const,
  BOOKINGS: ['bookings'] as const,
  BOOKING_DETAIL: (id: string) => ['bookings', id] as const,
  ITINERARIES: ['itineraries'] as const,
  ITINERARY_DETAIL: (id: string) => ['itineraries', id] as const,
  PAYMENTS: ['payments'] as const,
  PAYMENT_DETAIL: (id: string) => ['payments', id] as const,
  ADMIN_STATS: ['admin', 'stats'] as const,
  ADMIN_USERS: ['admin', 'users'] as const,
  ADMIN_BOOKINGS: ['admin', 'bookings'] as const,
  ADMIN_PACKAGES: ['admin', 'packages'] as const,
  BOOKING_HISTORY: ['booking-history'] as const,
} as const;
