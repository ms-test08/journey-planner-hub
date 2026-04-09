// src/features/travel-search/components/SearchBar.tsx
import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { TRAVEL_LABELS } from '../constants/travel.constants';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

interface SearchBarProps {
  onSearch: (params: { destination: string; startDate: string; guests: number }) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, startDate, guests });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 p-4 bg-card rounded-lg shadow-elevated">
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={TRAVEL_LABELS.DESTINATION_PLACEHOLDER}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="relative flex-1">
        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="relative w-full md:w-32">
        <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="number"
          min={1}
          max={20}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="pl-10"
        />
      </div>
      <Button type="submit" className="md:w-auto">
        <Search className="mr-2 h-4 w-4" />
        {TRAVEL_LABELS.SEARCH_BUTTON}
      </Button>
    </form>
  );
};
