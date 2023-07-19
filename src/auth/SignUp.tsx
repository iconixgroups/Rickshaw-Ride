```tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { UserContext } from '../UserContext';
import firebase from 'firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const { setUser } = useContext(UserContext);

  const signUp = async () => {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      setUser(user);
      // TODO: Send verification email
      // TODO: Save phone number to user profile
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View id="signUpForm">
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
};

export default SignUp;
```