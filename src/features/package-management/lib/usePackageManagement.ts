// src/features/package-management/lib/usePackageManagement.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { packageApi } from './package.api';
import { QUERY_KEYS } from '../../../core/lib/query-keys';
import { toast } from 'sonner';

export const useAdminPackages = () =>
  useQuery({ queryKey: QUERY_KEYS.ADMIN_PACKAGES, queryFn: packageApi.list });

export const useCreatePackage = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: packageApi.create,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: QUERY_KEYS.ADMIN_PACKAGES });
      toast.success('Package created');
    },
    onError: () => toast.error('Failed to create package'),
  });
};

export const useDeletePackage = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: packageApi.delete,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: QUERY_KEYS.ADMIN_PACKAGES });
      toast.success('Package deleted');
    },
    onError: () => toast.error('Failed to delete package'),
  });
};
