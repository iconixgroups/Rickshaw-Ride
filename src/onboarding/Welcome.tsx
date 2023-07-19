```tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogIn = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Rickshaw Ride App</Text>
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Log In" onPress={handleLogIn} />
    </View>
  );
};

export default Welcome;
```