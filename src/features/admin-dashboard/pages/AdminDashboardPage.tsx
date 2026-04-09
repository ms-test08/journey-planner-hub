// src/features/admin-dashboard/pages/AdminDashboardPage.tsx
import { StatCard } from '../components/StatCard';
import { ADMIN_LABELS } from '../constants/admin.constants';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { BarChart3, DollarSign, Users, Clock } from 'lucide-react';

const DEMO_STATS = {
  totalBookings: 1284,
  totalRevenue: 284500,
  activeUsers: 3421,
  pendingBookings: 42,
  revenueChange: 12.5,
  bookingsChange: 8.2,
};

const AdminDashboardPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-3xl font-bold font-display text-foreground">
        {ADMIN_LABELS.TITLE}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title={ADMIN_LABELS.TOTAL_BOOKINGS}
          value={DEMO_STATS.totalBookings.toLocaleString()}
          change={DEMO_STATS.bookingsChange}
          icon={BarChart3}
        />
        <StatCard
          title={ADMIN_LABELS.TOTAL_REVENUE}
          value={`$${DEMO_STATS.totalRevenue.toLocaleString()}`}
          change={DEMO_STATS.revenueChange}
          icon={DollarSign}
        />
        <StatCard
          title={ADMIN_LABELS.ACTIVE_USERS}
          value={DEMO_STATS.activeUsers.toLocaleString()}
          icon={Users}
        />
        <StatCard
          title={ADMIN_LABELS.PENDING_BOOKINGS}
          value={DEMO_STATS.pendingBookings}
          icon={Clock}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Bali Retreat — John D.', 'Swiss Alps — Sarah M.', 'Tokyo Tour — Mike R.'].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-foreground">{item}</span>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Top Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Bali, Indonesia', bookings: 342 },
                { name: 'Zurich, Switzerland', bookings: 256 },
                { name: 'Tokyo, Japan', bookings: 198 },
              ].map((dest, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-foreground">{dest.name}</span>
                  <span className="text-sm font-medium text-primary">{dest.bookings} bookings</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
