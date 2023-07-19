```tsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { WalletContext } from '../context/WalletContext';

const PromoCodes = () => {
  const [promoCode, setPromoCode] = useState('');
  const { applyPromoCode } = useContext(WalletContext);

  const handleApplyPromoCode = () => {
    applyPromoCode(promoCode);
    setPromoCode('');
  };

  return (
    <View>
      <TextInput
        value={promoCode}
        onChangeText={setPromoCode}
        placeholder="Enter Promo Code"
      />
      <Button title="Apply" onPress={handleApplyPromoCode} />
    </View>
  );
};

export default PromoCodes;
```