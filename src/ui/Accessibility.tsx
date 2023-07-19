```tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Accessibility = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a sample text to demonstrate accessibility features such as proper text sizing and contrast.
      </Text>
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
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
  },
});

export default Accessibility;
```