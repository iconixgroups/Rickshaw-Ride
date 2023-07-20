```tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const PickupLocation = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const handlePress = (e: any) => {
    setLocation(e.nativeEvent.coordinate);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handlePress}
      >
        <Marker coordinate={location} />
      </MapView>
      <View style={{ margin: 20 }}>
        <Text>Your Pickup Location:</Text>
        <Text>Latitude: {location.latitude}</Text>
        <Text>Longitude: {location.longitude}</Text>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Confirm Pickup Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PickupLocation;
```