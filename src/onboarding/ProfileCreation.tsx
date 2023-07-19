```tsx
import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const ProfileCreation: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isDriver, setIsDriver] = useState(false);
  const history = useHistory();

  const handleProfileCreation = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        await user.updateProfile({
          displayName: name,
          phoneNumber: phone,
        });
        history.push(isDriver ? '/driver/home' : '/rider/home');
      }
    } catch (error) {
      console.error('Error updating profile: ', error);
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleProfileCreation}>
        Create Profile
      </Button>
    </Grid>
  );
};

export default ProfileCreation;
```