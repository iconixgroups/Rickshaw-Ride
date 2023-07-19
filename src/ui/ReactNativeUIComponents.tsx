```tsx
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export const ReactNativeUIComponents = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Rickshaw Ride App</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Enter your name"
      />
      <Button
        title="Book a Ride"
        onPress={() => console.log('Book a Ride Pressed')}
      />
    </View>
  );
};
```