```tsx
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/auth';

const OTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<firebase.auth.ConfirmationResult | null>(null);

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const sendOTP = async () => {
    const appVerifier = new firebase.auth.RecaptchaVerifier('send-otp-button', {
      size: 'invisible',
    });

    const result = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
    setConfirmationResult(result);
  };

  const verifyOTP = async () => {
    if (confirmationResult) {
      await confirmationResult.confirm(code);
    }
  };

  return (
    <div>
      <TextField label="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <Button id="send-otp-button" onClick={sendOTP}>Send OTP</Button>
      <TextField label="OTP" value={code} onChange={handleCodeChange} />
      <Button onClick={verifyOTP}>Verify OTP</Button>
    </div>
  );
};

export default OTP;
```