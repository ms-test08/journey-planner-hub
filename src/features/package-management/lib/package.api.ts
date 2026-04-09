// src/features/package-management/lib/package.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { TravelPackage } from '../../travel-search/types/travel.types';
import type { TravelPackageForm } from '../types/package.types';

export const packageApi = {
  list: () =>
    apiClient.get<TravelPackage[]>(API_ENDPOINTS.ADMIN.PACKAGES).then((r) => r.data),

  create: (data: TravelPackageForm) =>
    apiClient.post<TravelPackage>(API_ENDPOINTS.ADMIN.PACKAGE_CREATE, data).then((r) => r.data),

  update: (id: string, data: Partial<TravelPackageForm>) =>
    apiClient.put<TravelPackage>(API_ENDPOINTS.ADMIN.PACKAGE_UPDATE(id), data).then((r) => r.data),

  delete: (id: string) =>
    apiClient.delete(API_ENDPOINTS.ADMIN.PACKAGE_DELETE(id)).then((r) => r.data),
};
