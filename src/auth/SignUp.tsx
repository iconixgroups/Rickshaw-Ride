```tsx
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import firebase from 'firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSignUp = async () => {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <Button onPress={() => onSignUp()} title="Sign Up" />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default SignUp;
```