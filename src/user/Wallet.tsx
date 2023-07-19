```tsx
import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { WalletContext } from '../contexts/WalletContext';

const Wallet = () => {
  const { wallet, updateWallet } = useContext(WalletContext);
  const [paymentMethod, setPaymentMethod] = useState(wallet.paymentMethod);
  const [transactionHistory, setTransactionHistory] = useState(wallet.transactionHistory);
  const [promoCode, setPromoCode] = useState('');

  const handlePaymentMethodChange = (newPaymentMethod) => {
    setPaymentMethod(newPaymentMethod);
    updateWallet({ ...wallet, paymentMethod: newPaymentMethod });
  };

  const handlePromoCodeChange = (newPromoCode) => {
    setPromoCode(newPromoCode);
  };

  const handlePromoCodeApply = () => {
    // Apply promo code logic here
  };

  return (
    <View id="walletForm">
      <Text>Payment Method: {paymentMethod}</Text>
      <Button title="Change Payment Method" onPress={handlePaymentMethodChange} />

      <Text>Transaction History:</Text>
      {transactionHistory.map((transaction, index) => (
        <Text key={index}>{transaction}</Text>
      ))}

      <Text>Promo Code:</Text>
      <Button title="Apply Promo Code" onPress={handlePromoCodeApply} />
    </View>
  );
};

export default Wallet;
```