// src/features/booking-history/pages/BookingHistoryPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { HISTORY_LABELS } from '../constants/history.constants';
import { History, MapPin, Calendar, Users } from 'lucide-react';

const DEMO_HISTORY = [
  { id: '1', packageTitle: 'Bali Paradise Retreat', destination: 'Bali, Indonesia', startDate: '2024-12-01', endDate: '2024-12-08', guests: 2, totalPrice: 2598, status: 'completed' as const, paymentStatus: 'completed' as const },
  { id: '2', packageTitle: 'Swiss Alps Adventure', destination: 'Zurich, Switzerland', startDate: '2024-10-15', endDate: '2024-10-20', guests: 1, totalPrice: 2499, status: 'completed' as const, paymentStatus: 'completed' as const },
  { id: '3', packageTitle: 'Tokyo Cultural Journey', destination: 'Tokyo, Japan', startDate: '2024-08-01', endDate: '2024-08-07', guests: 3, totalPrice: 5697, status: 'cancelled' as const, paymentStatus: 'refunded' as const },
];

const BookingHistoryPage = () => {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 animate-fade-in">
      <h1 className="text-3xl font-bold font-display text-foreground mb-2">
        {HISTORY_LABELS.TITLE}
      </h1>
      <p className="text-muted-foreground mb-8">{HISTORY_LABELS.SUBTITLE}</p>

      <div className="space-y-4">
        {DEMO_HISTORY.map((item) => (
          <Card key={item.id} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-lg">
                  <History className="h-5 w-5 text-primary" />
                  {item.packageTitle}
                </span>
                <Badge variant={item.status === 'completed' ? 'default' : 'destructive'}>
                  {item.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {item.destination}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {item.startDate} — {item.endDate}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" /> {item.guests} guests
                </span>
                <span className="font-semibold text-foreground ml-auto">
                  ${item.totalPrice.toLocaleString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookingHistoryPage;
