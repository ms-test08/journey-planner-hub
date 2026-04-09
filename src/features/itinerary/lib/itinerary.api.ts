// src/features/itinerary/lib/itinerary.api.ts
import { apiClient } from '../../../core/api/axios';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import type { Itinerary } from '../types/itinerary.types';

export const itineraryApi = {
  list: () =>
    apiClient.get<Itinerary[]>(API_ENDPOINTS.ITINERARY.LIST).then((r) => r.data),

  getDetail: (id: string) =>
    apiClient.get<Itinerary>(API_ENDPOINTS.ITINERARY.DETAIL(id)).then((r) => r.data),
};
