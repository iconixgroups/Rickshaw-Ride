```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { user, walletForm, updateWallet, WALLET_UPDATE_SUCCESS } from '../../sharedDependencies';

const WalletTab = () => {
  const [wallet, setWallet] = useState(user.wallet);

  useEffect(() => {
    // Listen for wallet updates
    walletForm.addEventListener(WALLET_UPDATE_SUCCESS, (e) => {
      setWallet(e.detail);
    });
  }, []);

  const handleUpdateWallet = () => {
    updateWallet(walletForm);
  };

  return (
    <View>
      <Text>Wallet Balance: {wallet.balance}</Text>
      <Text>Saved Payment Methods:</Text>
      {wallet.paymentMethods.map((method, index) => (
        <Text key={index}>{method}</Text>
      ))}
      <Button title="Update Wallet" onPress={handleUpdateWallet} />
    </View>
  );
};

export default WalletTab;
```