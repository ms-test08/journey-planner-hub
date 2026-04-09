// src/components/layout/AppLayout.tsx
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
