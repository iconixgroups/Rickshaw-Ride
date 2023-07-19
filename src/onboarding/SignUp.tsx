```tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { UserContext } from '../shared/UserContext';
import firebase from 'firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const { setUser } = useContext(UserContext);

  const signUp = async () => {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().signInWithPhoneNumber(phone);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
      />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
};

export default SignUp;
```