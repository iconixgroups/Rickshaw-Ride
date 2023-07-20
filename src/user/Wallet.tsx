```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { UserSchema } from '../schemas/UserSchema';
import { PaymentSchema } from '../schemas/PaymentSchema';

interface WalletProps {
  user: UserSchema;
  updateWallet: (user: UserSchema, payment: PaymentSchema) => void;
}

const Wallet: React.FC<WalletProps> = ({ user, updateWallet }) => {
  const [payment, setPayment] = useState<PaymentSchema | null>(null);

  useEffect(() => {
    if (user.wallet) {
      setPayment(user.wallet);
    }
  }, [user]);

  const handleUpdateWallet = () => {
    if (payment) {
      updateWallet(user, payment);
    }
  };

  return (
    <View>
      <Text>Wallet</Text>
      {payment && (
        <View>
          <Text>{`Balance: ${payment.balance}`}</Text>
          <Text>{`Payment Method: ${payment.method}`}</Text>
        </View>
      )}
      <Button title="Update Wallet" onPress={handleUpdateWallet} />
    </View>
  );
};

export default Wallet;
```