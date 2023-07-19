```tsx
import React, { useContext, useState } from 'react';
import { PaymentSchema } from '../schemas/PaymentSchema';
import { UserContext } from '../App';
import { Button, TextField, Paper } from '@material-ui/core';

const PaymentManagement: React.FC = () => {
  const { user } = useContext(UserContext);
  const [payment, setPayment] = useState<PaymentSchema | null>(null);

  const handlePaymentUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({
      ...payment,
      [event.target.name]: event.target.value,
    });
  };

  const submitPaymentUpdate = () => {
    // TODO: Implement payment update logic here
    console.log('Payment updated:', payment);
  };

  if (!user || user.role !== 'admin') {
    return <p>You do not have permission to view this page.</p>;
  }

  return (
    <Paper id="paymentManagementForm">
      <h2>Payment Management</h2>
      <TextField
        name="amount"
        label="Amount"
        value={payment?.amount || ''}
        onChange={handlePaymentUpdate}
      />
      <TextField
        name="method"
        label="Method"
        value={payment?.method || ''}
        onChange={handlePaymentUpdate}
      />
      <TextField
        name="status"
        label="Status"
        value={payment?.status || ''}
        onChange={handlePaymentUpdate}
      />
      <Button onClick={submitPaymentUpdate}>Update Payment</Button>
    </Paper>
  );
};

export default PaymentManagement;
```