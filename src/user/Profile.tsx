```tsx
import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleUpdate = async () => {
    try {
      const userRef = firebase.firestore().collection('users').doc(user.id);
      await userRef.update({
        name,
        email,
        phone
      });
      setUser({
        ...user,
        name,
        email,
        phone
      });
      alert('PROFILE_UPDATE_SUCCESS');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View id="userProfileForm">
      <Text>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
      />
      <Button title="Update Profile" onPress={handleUpdate} />
    </View>
  );
};

export default Profile;
```