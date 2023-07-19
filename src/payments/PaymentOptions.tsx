```tsx
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { WalletContext } from '../user/Wallet';

const PaymentOptions = () => {
  const { wallet, updateWallet } = useContext(WalletContext);

  const handleCardPayment = () => {
    // Implement card payment logic here
    // After successful payment, update the wallet context
    updateWallet({ ...wallet, lastPaymentMethod: 'Card' });
  };

  const handleUPIPayment = () => {
    // Implement UPI payment logic here
    // After successful payment, update the wallet context
    updateWallet({ ...wallet, lastPaymentMethod: 'UPI' });
  };

  const handleCashPayment = () => {
    // Implement cash payment logic here
    // After successful payment, update the wallet context
    updateWallet({ ...wallet, lastPaymentMethod: 'Cash' });
  };

  return (
    <View id="paymentOptionsForm">
      <Text>Select Payment Method</Text>
      <Button title="Pay with Card" onPress={handleCardPayment} />
      <Button title="Pay with UPI" onPress={handleUPIPayment} />
      <Button title="Pay with Cash" onPress={handleCashPayment} />
    </View>
  );
};

export default PaymentOptions;
```