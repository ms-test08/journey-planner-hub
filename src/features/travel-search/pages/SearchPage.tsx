// src/features/travel-search/pages/SearchPage.tsx
import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { PackageCard } from '../components/PackageCard';
import { TRAVEL_LABELS } from '../constants/travel.constants';
import { Compass } from 'lucide-react';

// Demo data for UI rendering (will be replaced by API)
const DEMO_PACKAGES = [
  { id: '1', title: 'Bali Paradise Retreat', destination: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600', duration: '7 days', price: 1299, rating: 4.8, available: true },
  { id: '2', title: 'Swiss Alps Adventure', destination: 'Zurich, Switzerland', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600', duration: '5 days', price: 2499, rating: 4.9, available: true },
  { id: '3', title: 'Tokyo Cultural Journey', destination: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600', duration: '6 days', price: 1899, rating: 4.7, available: true },
  { id: '4', title: 'Santorini Sunset Tour', destination: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600', duration: '4 days', price: 1599, rating: 4.6, available: false },
  { id: '5', title: 'Safari & Wildlife', destination: 'Nairobi, Kenya', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600', duration: '8 days', price: 3299, rating: 4.9, available: true },
  { id: '6', title: 'Maldives Luxury Escape', destination: 'Malé, Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600', duration: '5 days', price: 4199, rating: 5.0, available: true },
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useState<{ destination: string; startDate: string; guests: number } | null>(null);

  const filteredPackages = searchParams?.destination
    ? DEMO_PACKAGES.filter((p) =>
        p.destination.toLowerCase().includes(searchParams.destination.toLowerCase())
      )
    : DEMO_PACKAGES;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <div className="gradient-hero py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Compass className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground font-display mb-4">
            {TRAVEL_LABELS.SEARCH_TITLE}
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {TRAVEL_LABELS.SEARCH_SUBTITLE}
          </p>
          <SearchBar onSearch={setSearchParams} />
        </div>
      </div>

      {/* Packages grid */}
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <h2 className="text-2xl font-bold font-display text-foreground mb-8">
          {TRAVEL_LABELS.FEATURED_PACKAGES}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
        {filteredPackages.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No packages found. Try a different search.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
