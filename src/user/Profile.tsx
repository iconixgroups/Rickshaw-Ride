```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const updateProfile = () => {
    if (user) {
      user.updateProfile({
        displayName: 'New User Name',
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      }).then(() => {
        alert('PROFILE_UPDATE_SUCCESS');
      }).catch((error) => {
        alert(error.message);
      });
    }
  };

  return (
    <View>
      <Text>Profile</Text>
      <TextInput
        value={user?.displayName}
        placeholder="Display Name"
      />
      <TextInput
        value={user?.email}
        placeholder="Email"
      />
      <Button
        title="Update Profile"
        onPress={updateProfile}
      />
    </View>
  );
};

export default Profile;
```