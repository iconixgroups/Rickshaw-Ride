```tsx
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserContext } from '../shared/UserContext';
import firebase from 'firebase';

const ProfileCreation = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isDriver, setIsDriver] = useState(false);

  const handleProfileCreation = async () => {
    try {
      const userProfile = {
        name,
        phone,
        isDriver,
        uid: user.uid,
      };

      await firebase.firestore().collection('users').doc(user.uid).set(userProfile);

      setUser(userProfile);
    } catch (error) {
      console.error('Error creating profile: ', error);
    }
  };

  return (
    <View id="profileCreationForm">
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <Button
        title="I am a Driver"
        onPress={() => setIsDriver(true)}
      />
      <Button
        title="I am a Rider"
        onPress={() => setIsDriver(false)}
      />
      <Button
        title="Create Profile"
        onPress={handleProfileCreation}
      />
    </View>
  );
};

export default ProfileCreation;
```