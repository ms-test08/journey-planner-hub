// src/features/auth/lib/useAuth.ts
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from './auth.api';
import { useAuthStore } from '../../../store/auth.store';
import { ROUTE_PATHS } from '../../../core/constants/routes';
import { toast } from 'sonner';

export const useLogin = () => {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      toast.success('Welcome back!');
      navigate(ROUTE_PATHS.DASHBOARD);
    },
    onError: () => {
      toast.error('Invalid email or password');
    },
  });
};

export const useRegister = () => {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      toast.success('Account created successfully!');
      navigate(ROUTE_PATHS.DASHBOARD);
    },
    onError: () => {
      toast.error('Registration failed. Please try again.');
    },
  });
};

export const useLogout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      logout();
      navigate(ROUTE_PATHS.LOGIN);
    },
  });
};
