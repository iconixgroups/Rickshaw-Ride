```tsx
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WalletContext } from '../context/WalletContext';
import { Card } from 'react-native-paper';

const SavedPaymentMethods = () => {
  const { wallet } = useContext(WalletContext);
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    setPaymentMethods(wallet.paymentMethods);
  }, [wallet]);

  const renderPaymentMethod = ({ item }) => (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Text>{item.type}</Text>
        <Text>{item.details}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View>
      <Text style={{ fontSize: 20, margin: 10 }}>Saved Payment Methods</Text>
      <FlatList
        data={paymentMethods}
        renderItem={renderPaymentMethod}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SavedPaymentMethods;
```