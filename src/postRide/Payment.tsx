```tsx
import React, { useContext, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { WalletContext } from '../user/Wallet';
import { PaymentSchema } from '../shared/schemas';

const Payment: React.FC = () => {
  const { wallet, updateWallet } = useContext(WalletContext);
  const [paymentData, setPaymentData] = useState<PaymentSchema>({ amount: 0, method: 'cash' });

  const handlePayment = () => {
    if (wallet.balance >= paymentData.amount) {
      updateWallet(wallet.balance - paymentData.amount);
      alert('PAYMENT_SUCCESS');
    } else {
      alert('Insufficient balance. Please add funds to your wallet.');
    }
  };

  return (
    <>
      <TextInput
        label="Amount"
        value={paymentData.amount.toString()}
        onChangeText={(amount) => setPaymentData({ ...paymentData, amount: Number(amount) })}
      />
      <TextInput
        label="Payment Method"
        value={paymentData.method}
        onChangeText={(method) => setPaymentData({ ...paymentData, method })}
      />
      <Button mode="contained" onPress={handlePayment}>
        Pay
      </Button>
    </>
  );
};

export default Payment;
```