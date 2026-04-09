// src/features/itinerary/types/itinerary.types.ts
export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Itinerary {
  id: string;
  bookingId: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
}
