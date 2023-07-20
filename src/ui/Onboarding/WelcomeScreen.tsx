```tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Rickshaw Ride</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Log In"
        onPress={() => navigation.navigate('LogIn')}
      />
    </View>
  );
};

export default WelcomeScreen;
```