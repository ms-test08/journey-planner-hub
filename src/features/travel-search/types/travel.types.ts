// src/features/travel-search/types/travel.types.ts
export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  rating: number;
  priceFrom: number;
}

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  rating: number;
  available: boolean;
  includes: string[];
}

export interface SearchParams {
  destination?: string;
  startDate?: string;
  endDate?: string;
  guests?: number;
  minPrice?: number;
  maxPrice?: number;
}
