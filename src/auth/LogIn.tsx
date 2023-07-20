```tsx
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import firebase from 'firebase';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('LOGIN_SUCCESS');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <TextInput
        id="loginForm"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        id="loginForm"
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