// src/core/auth/AuthGuard.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';
import { ROUTE_PATHS } from '../constants/routes';
import type { Role } from '../constants/roles';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
  allowedRoles?: Role[];
}

export const AuthGuard = ({ allowedRoles }: AuthGuardProps) => {
  const { isAuthenticated, isLoading, user } = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to={ROUTE_PATHS.DASHBOARD} replace />;
  }

  return <Outlet />;
};
