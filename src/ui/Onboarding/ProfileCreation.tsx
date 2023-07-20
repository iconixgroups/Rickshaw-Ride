```tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserSchema } from '../../shared/schemas';
import { updateProfile } from '../../user/Profile';

const ProfileCreation = () => {
  const [user, setUser] = useState<UserSchema>({});

  const handleInputChange = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    updateProfile(user);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(value) => handleInputChange('phone', value)}
      />
      <Button title="Create Profile" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default ProfileCreation;
```