// src/components/layout/AppHeader.tsx
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useAuthStore } from '../../store/auth.store';
import { useLogout } from '../../features/auth/lib/useAuth';
import { ROUTE_PATHS } from '../../core/constants/routes';
import { ROLES } from '../../core/constants/roles';
import { Plane, User, LogOut, Shield } from 'lucide-react';

export const AppHeader = () => {
  const { isAuthenticated, user } = useAuthStore();
  const logoutMutation = useLogout();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-display text-foreground">TravelHub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to={ROUTE_PATHS.SEARCH} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Explore
          </Link>
          {isAuthenticated && (
            <>
              <Link to={ROUTE_PATHS.ITINERARY} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Itineraries
              </Link>
              <Link to={ROUTE_PATHS.BOOKING_HISTORY} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                My Trips
              </Link>
              {user?.role === ROLES.ADMIN && (
                <Link to={ROUTE_PATHS.ADMIN_DASHBOARD} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <Shield className="h-3.5 w-3.5" /> Admin
                </Link>
              )}
            </>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => navigate(ROUTE_PATHS.PROFILE)}>
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => logoutMutation.mutate()}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate(ROUTE_PATHS.LOGIN)}>
                Sign In
              </Button>
              <Button onClick={() => navigate(ROUTE_PATHS.REGISTER)}>
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
