// src/components/layout/AdminLayout.tsx
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ROUTE_PATHS } from '../../core/constants/routes';
import { BarChart3, Package, Users, BookOpen, ArrowLeft } from 'lucide-react';

const ADMIN_NAV = [
  { path: ROUTE_PATHS.ADMIN_DASHBOARD, label: 'Dashboard', icon: BarChart3 },
  { path: ROUTE_PATHS.ADMIN_PACKAGES, label: 'Packages', icon: Package },
  { path: ROUTE_PATHS.ADMIN_BOOKINGS, label: 'Bookings', icon: BookOpen },
  { path: ROUTE_PATHS.ADMIN_USERS, label: 'Users', icon: Users },
];

export const AdminLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="w-64 border-r border-border bg-card p-4 hidden lg:block">
        <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to App
        </Link>
        <nav className="space-y-1">
          {ADMIN_NAV.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                location.pathname === path
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};
