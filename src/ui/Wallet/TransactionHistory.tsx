```tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { user, PaymentSchema } from '../../sharedDependencies';

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<PaymentSchema[]>([]);

  useEffect(() => {
    // Fetch transactions from user data
    setTransactions(user.wallet.transactions);
  }, []);

  const renderItem = ({ item }: { item: PaymentSchema }) => (
    <View>
      <Text>{`Transaction ID: ${item.id}`}</Text>
      <Text>{`Amount: ${item.amount}`}</Text>
      <Text>{`Date: ${new Date(item.date).toLocaleDateString()}`}</Text>
      <Text>{`Status: ${item.status}`}</Text>
    </View>
  );

  return (
    <View>
      <Text>Transaction History</Text>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TransactionHistory;
```