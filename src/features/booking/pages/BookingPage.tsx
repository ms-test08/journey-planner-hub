// src/features/booking/pages/BookingPage.tsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { BOOKING_LABELS } from '../constants/booking.constants';
import { useCreateBooking } from '../lib/useBooking';
import { CalendarDays, Users, CreditCard, Loader2 } from 'lucide-react';

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);
  const createBooking = useCreateBooking();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    createBooking.mutate({ packageId: id, startDate, endDate, guests });
  };

  return (
    <div className="container mx-auto max-w-xl py-12 px-4 animate-fade-in">
      <h1 className="text-3xl font-bold font-display text-foreground mb-2">
        {BOOKING_LABELS.TITLE}
      </h1>
      <p className="text-muted-foreground mb-8">{BOOKING_LABELS.SUBTITLE}</p>

      <Card className="shadow-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Booking Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" /> {BOOKING_LABELS.START_DATE}
              </Label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" /> {BOOKING_LABELS.END_DATE}
              </Label>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> {BOOKING_LABELS.GUESTS}
              </Label>
              <Input type="number" min={1} max={20} value={guests} onChange={(e) => setGuests(Number(e.target.value))} required />
            </div>
            <Button type="submit" className="w-full" disabled={createBooking.isPending}>
              {createBooking.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {BOOKING_LABELS.CONFIRM}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingPage;
