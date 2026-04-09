// src/features/travel-search/components/PackageCard.tsx
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { TRAVEL_LABELS } from '../constants/travel.constants';
import { Star, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PackageCardProps {
  id: string;
  title: string;
  destination: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  available: boolean;
}

export const PackageCard = ({
  id,
  title,
  destination,
  image,
  duration,
  price,
  rating,
  available,
}: PackageCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden group hover:shadow-elevated transition-shadow duration-300 animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge
          variant={available ? 'default' : 'destructive'}
          className="absolute top-3 right-3"
        >
          {available ? TRAVEL_LABELS.AVAILABLE : TRAVEL_LABELS.SOLD_OUT}
        </Badge>
      </div>
      <CardContent className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-foreground line-clamp-1">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {destination}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {duration}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-foreground">${price}</span>
            <span className="text-sm text-muted-foreground ml-1">/{TRAVEL_LABELS.PER_PERSON}</span>
          </div>
          <span className="flex items-center gap-1 text-travel-sunset font-medium">
            <Star className="h-4 w-4 fill-current" /> {rating}
          </span>
        </div>
        <Button
          className="w-full"
          disabled={!available}
          onClick={() => navigate(`/booking/${id}`)}
        >
          {TRAVEL_LABELS.BOOK_NOW}
        </Button>
      </CardContent>
    </Card>
  );
};
