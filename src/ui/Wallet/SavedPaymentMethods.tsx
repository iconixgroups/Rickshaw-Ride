```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { user } from '../../auth/SignUp';
import { PaymentSchema } from '../../payments/PaymentOptions';

const SavedPaymentMethods: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentSchema[]>([]);

  useEffect(() => {
    // Fetch saved payment methods from user data
    setPaymentMethods(user.paymentMethods);
  }, []);

  const renderItem = ({ item }: { item: PaymentSchema }) => (
    <View>
      <Text>{item.type}</Text>
      <Text>{item.details}</Text>
    </View>
  );

  return (
    <View>
      <Text>Saved Payment Methods</Text>
      <FlatList
        data={paymentMethods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SavedPaymentMethods;
```