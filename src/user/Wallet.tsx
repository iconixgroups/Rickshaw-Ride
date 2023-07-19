```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';

const Wallet = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [promoCodes, setPromoCodes] = useState([]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase.database().ref(`users/${user.uid}/wallet`).on('value', (snapshot) => {
        const walletData = snapshot.val();
        setPaymentMethods(walletData.paymentMethods);
        setTransactionHistory(walletData.transactionHistory);
        setPromoCodes(walletData.promoCodes);
      });
    }
  }, []);

  return (
    <View>
      <Text>Payment Methods</Text>
      {paymentMethods.map((method, index) => (
        <Text key={index}>{method}</Text>
      ))}
      <Button title="Add Payment Method" onPress={() => {}} />

      <Text>Transaction History</Text>
      {transactionHistory.map((transaction, index) => (
        <Text key={index}>{transaction}</Text>
      ))}

      <Text>Promo Codes</Text>
      {promoCodes.map((promoCode, index) => (
        <Text key={index}>{promoCode}</Text>
      ))}
      <Button title="Add Promo Code" onPress={() => {}} />
    </View>
  );
};

export default Wallet;
```