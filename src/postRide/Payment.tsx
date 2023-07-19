```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { PaymentSchema } from '../shared/Schema';
import { PAYMENT_SUCCESS, PAYMENT_FAILURE } from '../shared/MessageNames';

const Payment = () => {
  const [payment, setPayment] = useState<PaymentSchema>({});
  const [message, setMessage] = useState<string>('');

  const handlePayment = () => {
    // Logic for processing payment goes here
    // On successful payment
    setMessage(PAYMENT_SUCCESS);
    // On payment failure
    setMessage(PAYMENT_FAILURE);
  };

  return (
    <View>
      <Text>Payment</Text>
      <Text>{message}</Text>
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

export default Payment;
```