// src/core/constants/api-endpoints.ts
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },
  USER: {
    PROFILE: '/users/profile',
    UPDATE: '/users/profile',
  },
  TRAVEL: {
    SEARCH: '/travel/search',
    DESTINATIONS: '/travel/destinations',
    PACKAGES: '/travel/packages',
    PACKAGE_DETAIL: (id: string) => `/travel/packages/${id}`,
  },
  BOOKING: {
    CREATE: '/bookings',
    LIST: '/bookings',
    DETAIL: (id: string) => `/bookings/${id}`,
    CANCEL: (id: string) => `/bookings/${id}/cancel`,
  },
  ITINERARY: {
    LIST: '/itineraries',
    DETAIL: (id: string) => `/itineraries/${id}`,
    CREATE: '/itineraries',
    UPDATE: (id: string) => `/itineraries/${id}`,
  },
  PAYMENTS: {
    CREATE: '/payments',
    LIST: '/payments',
    DETAIL: (id: string) => `/payments/${id}`,
  },
  ADMIN: {
    DASHBOARD_STATS: '/admin/stats',
    USERS: '/admin/users',
    BOOKINGS: '/admin/bookings',
    PACKAGES: '/admin/packages',
    PACKAGE_CREATE: '/admin/packages',
    PACKAGE_UPDATE: (id: string) => `/admin/packages/${id}`,
    PACKAGE_DELETE: (id: string) => `/admin/packages/${id}`,
  },
} as const;
