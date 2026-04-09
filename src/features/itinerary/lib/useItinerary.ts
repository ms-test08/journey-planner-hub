// src/features/itinerary/lib/useItinerary.ts
import { useQuery } from '@tanstack/react-query';
import { itineraryApi } from './itinerary.api';
import { QUERY_KEYS } from '../../../core/lib/query-keys';

export const useItineraries = () =>
  useQuery({ queryKey: QUERY_KEYS.ITINERARIES, queryFn: itineraryApi.list });

export const useItineraryDetail = (id: string) =>
  useQuery({
    queryKey: QUERY_KEYS.ITINERARY_DETAIL(id),
    queryFn: () => itineraryApi.getDetail(id),
    enabled: !!id,
  });
