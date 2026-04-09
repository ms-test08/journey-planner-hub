// src/features/admin-dashboard/types/admin.types.ts
export interface DashboardStats {
  totalBookings: number;
  totalRevenue: number;
  activeUsers: number;
  pendingBookings: number;
  revenueChange: number;
  bookingsChange: number;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: string;
}
