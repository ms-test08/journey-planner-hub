// src/features/auth/pages/LoginPage.tsx
import { LoginForm } from '../components/LoginForm';
import { AUTH_LABELS } from '../constants/auth.constants';
import { Plane } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-center">
          <Plane className="mx-auto mb-6 h-16 w-16 text-primary-foreground" />
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Explore the World
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Your next adventure is just a click away. Discover destinations, book experiences, and create memories.
          </p>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-display">
              {AUTH_LABELS.LOGIN_TITLE}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {AUTH_LABELS.LOGIN_SUBTITLE}
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
