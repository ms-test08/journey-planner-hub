// src/features/payments/constants/payment.constants.ts
export const PAYMENT_LABELS = {
  TITLE: 'Payment',
  SUBTITLE: 'Complete your payment securely',
  METHOD_LABEL: 'Payment Method',
  AMOUNT_LABEL: 'Amount',
  PAY_NOW: 'Pay Now',
  METHODS: {
    card: 'Credit/Debit Card',
    paypal: 'PayPal',
    bank: 'Bank Transfer',
  },
  STATUS: {
    pending: 'Pending',
    completed: 'Completed',
    failed: 'Failed',
    refunded: 'Refunded',
  },
} as const;
