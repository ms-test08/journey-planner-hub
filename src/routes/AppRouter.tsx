// src/routes/AppRouter.tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthGuard } from '../core/auth/AuthGuard';
import { GuestGuard } from '../core/auth/GuestGuard';
import { AppLayout } from '../components/layout/AppLayout';
import { AdminLayout } from '../components/layout/AdminLayout';
import { ROUTE_PATHS } from '../core/constants/routes';
import { ROLES } from '../core/constants/roles';
import { Loader2 } from 'lucide-react';

// Lazy-loaded pages
const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('../features/auth/pages/RegisterPage'));
const SearchPage = lazy(() => import('../features/travel-search/pages/SearchPage'));
const ProfilePage = lazy(() => import('../features/user/pages/ProfilePage'));
const BookingPage = lazy(() => import('../features/booking/pages/BookingPage'));
const ItineraryPage = lazy(() => import('../features/itinerary/pages/ItineraryPage'));
const PaymentPage = lazy(() => import('../features/payments/pages/PaymentPage'));
const BookingHistoryPage = lazy(() => import('../features/booking-history/pages/BookingHistoryPage'));
const AdminDashboardPage = lazy(() => import('../features/admin-dashboard/pages/AdminDashboardPage'));
const PackageManagementPage = lazy(() => import('../features/package-management/pages/PackageManagementPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Guest routes */}
        <Route element={<GuestGuard />}>
          <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage />} />
          <Route path={ROUTE_PATHS.REGISTER} element={<RegisterPage />} />
        </Route>

        {/* Public routes with layout */}
        <Route element={<AppLayout />}>
          <Route path={ROUTE_PATHS.HOME} element={<SearchPage />} />
          <Route path={ROUTE_PATHS.SEARCH} element={<SearchPage />} />

          {/* Authenticated user routes */}
          <Route element={<AuthGuard />}>
            <Route path={ROUTE_PATHS.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTE_PATHS.BOOKING_DETAIL} element={<BookingPage />} />
            <Route path={ROUTE_PATHS.ITINERARY} element={<ItineraryPage />} />
            <Route path={ROUTE_PATHS.PAYMENTS} element={<PaymentPage />} />
            <Route path={ROUTE_PATHS.BOOKING_HISTORY} element={<BookingHistoryPage />} />
          </Route>
        </Route>

        {/* Admin routes */}
        <Route element={<AuthGuard allowedRoles={[ROLES.ADMIN]} />}>
          <Route element={<AppLayout />}>
            <Route element={<AdminLayout />}>
              <Route path={ROUTE_PATHS.ADMIN_DASHBOARD} element={<AdminDashboardPage />} />
              <Route path={ROUTE_PATHS.ADMIN_PACKAGES} element={<PackageManagementPage />} />
              <Route path={ROUTE_PATHS.ADMIN_BOOKINGS} element={<div className="text-foreground">Admin Bookings</div>} />
              <Route path={ROUTE_PATHS.ADMIN_USERS} element={<div className="text-foreground">Admin Users</div>} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
