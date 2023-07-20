```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { PaymentSchema } from '../../shared/Schema';
import { processPayment } from '../../payments/PaymentOptions';

const Payment: React.FC = () => {
  const [payment, setPayment] = useState<PaymentSchema>({});

  const handlePayment = () => {
    processPayment(payment)
      .then(response => {
        if (response.status === 'success') {
          alert('Payment Successful');
        } else {
          alert('Payment Failed');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <Text>Payment</Text>
      <Text>Total Fare: {payment.totalFare}</Text>
      <Text>Payment Method: {payment.method}</Text>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

export default Payment;
```