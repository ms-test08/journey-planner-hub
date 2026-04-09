// src/features/travel-search/lib/useTravel.ts
import { useQuery } from '@tanstack/react-query';
import { travelApi } from './travel.api';
import { QUERY_KEYS } from '../../../core/lib/query-keys';
import type { SearchParams } from '../types/travel.types';

export const useTravelSearch = (params: SearchParams) => {
  return useQuery({
    queryKey: QUERY_KEYS.TRAVEL_SEARCH(params as Record<string, string>),
    queryFn: () => travelApi.search(params),
    enabled: Object.values(params).some(Boolean),
    refetchInterval: 30000, // Real-time availability polling every 30s
  });
};

export const useDestinations = () => {
  return useQuery({
    queryKey: QUERY_KEYS.DESTINATIONS,
    queryFn: travelApi.getDestinations,
  });
};

export const usePackages = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PACKAGES,
    queryFn: travelApi.getPackages,
    refetchInterval: 30000,
  });
};

export const usePackageDetail = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.PACKAGE_DETAIL(id),
    queryFn: () => travelApi.getPackageDetail(id),
    enabled: !!id,
  });
};
