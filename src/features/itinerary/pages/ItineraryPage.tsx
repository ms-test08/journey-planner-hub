// src/features/itinerary/pages/ItineraryPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { ITINERARY_LABELS } from '../constants/itinerary.constants';
import { Map, Calendar } from 'lucide-react';

const DEMO_ITINERARIES = [
  {
    id: '1',
    title: 'Bali Paradise Retreat',
    destination: 'Bali, Indonesia',
    startDate: '2025-03-15',
    endDate: '2025-03-22',
    days: [
      { day: 1, title: 'Arrival & Beach', description: 'Arrive and relax at the resort', activities: ['Airport transfer', 'Beach walk', 'Welcome dinner'] },
      { day: 2, title: 'Temple Tour', description: 'Explore ancient temples', activities: ['Uluwatu Temple', 'Kecak Dance', 'Seafood dinner'] },
      { day: 3, title: 'Rice Terraces', description: 'Visit iconic Tegallalang', activities: ['Tegallalang Rice Terrace', 'Coffee plantation', 'Art market'] },
    ],
  },
];

const ItineraryPage = () => {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 animate-fade-in">
      <h1 className="text-3xl font-bold font-display text-foreground mb-2">
        {ITINERARY_LABELS.TITLE}
      </h1>
      <p className="text-muted-foreground mb-8">{ITINERARY_LABELS.SUBTITLE}</p>

      <div className="space-y-6">
        {DEMO_ITINERARIES.map((itinerary) => (
          <Card key={itinerary.id} className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5 text-primary" />
                {itinerary.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {itinerary.startDate} — {itinerary.endDate}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {itinerary.days.map((day) => (
                  <div key={day.day} className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">
                      {ITINERARY_LABELS.DAY} {day.day}: {day.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{day.description}</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {day.activities.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItineraryPage;
