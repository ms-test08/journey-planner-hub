// src/core/auth/useAuthInit.ts
import { useEffect } from 'react';
import axios from 'axios';
import { ENV } from '../config/env';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { useAuthStore } from '../../store/auth.store';

export const useAuthInit = () => {
  const { setAuth, setLoading, logout } = useAuthStore();

  useEffect(() => {
    const refreshAuth = async () => {
      try {
        const { data } = await axios.post(
          `${ENV.API_BASE_URL}${API_ENDPOINTS.AUTH.REFRESH}`,
          {},
          { withCredentials: true }
        );
        setAuth(data.user, data.accessToken);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    refreshAuth();
  }, [setAuth, setLoading, logout]);
};
