```tsx
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RideContext } from '../context/RideContext';

const PickupLocation = () => {
  const [location, setLocation] = useState(null);
  const { setPickupLocation } = useContext(RideContext);

  const handlePress = (e) => {
    setLocation(e.nativeEvent.coordinate);
    setPickupLocation(e.nativeEvent.coordinate);
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
        {location && <Marker coordinate={location} />}
      </MapView>
      {location && (
        <View style={{ margin: 20 }}>
          <Text>Pickup Location:</Text>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 }}
            onPress={() => alert('Pickup location set!')}
          >
            <Text style={{ color: 'white' }}>Set Pickup Location</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PickupLocation;
```