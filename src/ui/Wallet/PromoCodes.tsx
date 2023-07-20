```tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PromoCodes: React.FC = () => {
  const [promoCode, setPromoCode] = useState('');

  const handleApplyPromoCode = () => {
    // Logic to apply promo code goes here
  };

  return (
    <View>
      <Text>Promo Codes</Text>
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