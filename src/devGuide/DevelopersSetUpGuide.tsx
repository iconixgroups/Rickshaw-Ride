import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DevelopersSetUpGuide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developers Set Up Guide</Text>
      <Text style={styles.text}>
        1. Install Node.js and npm from the official website.
      </Text>
      <Text style={styles.text}>
        2. Install React Native CLI globally using npm: npm install -g react-native-cli
      </Text>
      <Text style={styles.text}>
        3. Clone the repository: git clone https://github.com/your-repo/rickshaw-ride-app.git
      </Text>
      <Text style={styles.text}>
        4. Navigate to the project directory: cd rickshaw-ride-app
      </Text>
      <Text style={styles.text}>
        5. Install dependencies: npm install
      </Text>
      <Text style={styles.text}>
        6. Run the app: react-native run-android or react-native run-ios
      </Text>
      <Text style={styles.text}>
        7. For Firebase setup, follow the official Firebase documentation.
      </Text>
      <Text style={styles.text}>
        8. For Maps setup, follow the official React Native Maps documentation.
      </Text>
      <Text style={styles.text}>
        9. For Localization setup, follow the official React Native Localize and i18n-js documentation.
      </Text>
      <Text style={styles.text}>
        10. For Material UI setup, follow the official Material UI documentation.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DevelopersSetUpGuide;