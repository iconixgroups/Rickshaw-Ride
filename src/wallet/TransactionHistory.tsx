```tsx
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WalletContext } from '../context/WalletContext';

const TransactionHistory = () => {
  const { transactions } = useContext(WalletContext);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    setTransactionHistory(transactions);
  }, [transactions]);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.date}</Text>
      <Text>{item.amount}</Text>
      <Text>{item.type}</Text>
    </View>
  );

  return (
    <View>
      <Text>Transaction History</Text>
      <FlatList
        data={transactionHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TransactionHistory;
```