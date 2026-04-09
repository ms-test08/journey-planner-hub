// src/core/constants/routes.ts
export const ROUTE_PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SEARCH: '/search',
  BOOKING: '/booking',
  BOOKING_DETAIL: '/booking/:id',
  ITINERARY: '/itinerary',
  ITINERARY_DETAIL: '/itinerary/:id',
  PAYMENTS: '/payments',
  BOOKING_HISTORY: '/booking-history',
  // Admin
  ADMIN_DASHBOARD: '/admin',
  ADMIN_PACKAGES: '/admin/packages',
  ADMIN_BOOKINGS: '/admin/bookings',
  ADMIN_USERS: '/admin/users',
} as const;
