```tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../auth/User';
import { Payment } from '../payments/Payment';

interface Transaction {
  id: string;
  user: User;
  payment: Payment;
  date: Date;
}

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Fetch transactions from backend
    // This is a placeholder and should be replaced with actual fetch call
    const fetchTransactions = async () => {
      const response = await fetch('https://api.example.com/transactions');
      const data = await response.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <View>
      <Text>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{`Transaction ID: ${item.id}`}</Text>
            <Text>{`User: ${item.user.name}`}</Text>
            <Text>{`Payment: ${item.payment.amount}`}</Text>
            <Text>{`Date: ${item.date}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TransactionHistory;
```