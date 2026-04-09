// src/features/auth/pages/RegisterPage.tsx
import { RegisterForm } from '../components/RegisterForm';
import { AUTH_LABELS } from '../constants/auth.constants';
import { Globe } from 'lucide-react';

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-center">
          <Globe className="mx-auto mb-6 h-16 w-16 text-primary-foreground" />
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Join the Journey
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Create your account and start planning unforgettable trips around the globe.
          </p>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-display">
              {AUTH_LABELS.REGISTER_TITLE}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {AUTH_LABELS.REGISTER_SUBTITLE}
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
