```tsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';
import { UserContext } from '../UserContext';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const logIn = async () => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      setUser(user);
      Alert.alert('LOG_IN_SUCCESS', 'You have successfully logged in.');
    } catch (error) {
      Alert.alert('LOG_IN_ERROR', error.message);
    }
  };

  return (
    <View id="logInForm">
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
      <Button title="Log In" onPress={logIn} />
    </View>
  );
};

export default LogIn;
```