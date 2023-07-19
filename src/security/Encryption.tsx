```tsx
import React from 'react';
import { Text, View } from 'react-native';
import * as Crypto from 'expo-crypto';

const Encryption = () => {
  const encryptData = async (data: string) => {
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      data
    );
    return digest;
  };

  return (
    <View>
      <Text>Encryption Component</Text>
    </View>
  );
};

export default Encryption;
```