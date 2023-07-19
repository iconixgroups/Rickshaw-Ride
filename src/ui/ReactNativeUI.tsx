```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReactNativeUI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rickshaw Ride App</Text>
      <Text style={styles.subtitle}>Experience the ease of Rickshaw booking</Text>
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
  subtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default ReactNativeUI;
```