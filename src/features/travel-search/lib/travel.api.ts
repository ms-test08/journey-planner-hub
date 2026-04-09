// src/features/travel-search/lib/travel.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { TravelPackage, Destination, SearchParams } from '../types/travel.types';

export const travelApi = {
  search: (params: SearchParams) =>
    apiClient.get<TravelPackage[]>(API_ENDPOINTS.TRAVEL.SEARCH, { params }).then((r) => r.data),

  getDestinations: () =>
    apiClient.get<Destination[]>(API_ENDPOINTS.TRAVEL.DESTINATIONS).then((r) => r.data),

  getPackages: () =>
    apiClient.get<TravelPackage[]>(API_ENDPOINTS.TRAVEL.PACKAGES).then((r) => r.data),

  getPackageDetail: (id: string) =>
    apiClient.get<TravelPackage>(API_ENDPOINTS.TRAVEL.PACKAGE_DETAIL(id)).then((r) => r.data),
};
