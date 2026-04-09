// src/features/package-management/pages/PackageManagementPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { PACKAGE_LABELS } from '../constants/package.constants';
import { Plus, Edit, Trash2, Package } from 'lucide-react';

const DEMO_PACKAGES = [
  { id: '1', title: 'Bali Paradise Retreat', destination: 'Bali', duration: '7 days', price: 1299, available: true },
  { id: '2', title: 'Swiss Alps Adventure', destination: 'Switzerland', duration: '5 days', price: 2499, available: true },
  { id: '3', title: 'Tokyo Cultural Journey', destination: 'Japan', duration: '6 days', price: 1899, available: false },
];

const PackageManagementPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground">
            {PACKAGE_LABELS.TITLE}
          </h1>
          <p className="text-muted-foreground mt-1">{PACKAGE_LABELS.SUBTITLE}</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          {PACKAGE_LABELS.ADD_PACKAGE}
        </Button>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            All Packages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {DEMO_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-foreground">{pkg.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {pkg.destination} · {pkg.duration} · ${pkg.price}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={pkg.available ? 'default' : 'destructive'}>
                    {pkg.available ? 'Active' : 'Inactive'}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackageManagementPage;
