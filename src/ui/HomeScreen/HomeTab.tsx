```tsx
import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

const HomeTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>Book a Ride</Text>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 28.7041,
          longitude: 77.1025,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default HomeTab;
```