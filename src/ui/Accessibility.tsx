```tsx
import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { UserContext } from '../auth/UserContext';

const Accessibility = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessibility Settings</Text>
      <Text style={styles.text}>Font Size: {user.settings.fontSize}</Text>
      <Text style={styles.text}>Contrast: {user.settings.contrast}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Accessibility;
```