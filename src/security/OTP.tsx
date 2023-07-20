```tsx
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

const OTP = () => {
  const [code, setCode] = useState('');

  const confirmCode = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(user.verificationId, code);
      await auth().signInWithCredential(credential);
      sendNotification(LOGIN_SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TextInput
        value={code}
        onChangeText={text => setCode(text)}
        placeholder="Enter OTP"
      />
      <Button title="Confirm Code" onPress={confirmCode} />
    </>
  );
};

export default OTP;
```