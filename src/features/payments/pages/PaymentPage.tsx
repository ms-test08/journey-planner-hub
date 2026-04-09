// src/features/payments/pages/PaymentPage.tsx
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { PAYMENT_LABELS } from '../constants/payment.constants';
import { useCreatePayment } from '../lib/usePayment';
import { CreditCard, Loader2, Shield } from 'lucide-react';

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get('bookingId') || '';
  const [method, setMethod] = useState('card');
  const createPayment = useCreatePayment();

  const handlePay = () => {
    createPayment.mutate({ bookingId, method });
  };

  return (
    <div className="container mx-auto max-w-lg py-12 px-4 animate-fade-in">
      <h1 className="text-3xl font-bold font-display text-foreground mb-2">
        {PAYMENT_LABELS.TITLE}
      </h1>
      <p className="text-muted-foreground mb-8">{PAYMENT_LABELS.SUBTITLE}</p>

      <Card className="shadow-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            {PAYMENT_LABELS.METHOD_LABEL}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>{PAYMENT_LABELS.METHOD_LABEL}</Label>
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(PAYMENT_LABELS.METHODS).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setMethod(key)}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-colors text-left ${
                    method === key
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted p-3 rounded-lg">
            <Shield className="h-4 w-4 text-accent" />
            Your payment is secured with 256-bit encryption
          </div>

          <Button className="w-full" onClick={handlePay} disabled={createPayment.isPending}>
            {createPayment.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {PAYMENT_LABELS.PAY_NOW}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPage;
