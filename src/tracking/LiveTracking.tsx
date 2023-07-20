```tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { driver } from '../shared/variables';

interface DriverLocation {
  latitude: number;
  longitude: number;
}

const LiveTracking: React.FC = () => {
  const [driverLocation, setDriverLocation] = useState<DriverLocation | null>(null);

  useEffect(() => {
    // TODO: Replace with actual function to fetch driver's location
    fetchDriverLocation();
  }, []);

  const fetchDriverLocation = async () => {
    // TODO: Fetch driver's location from backend
    // For now, we'll use a dummy location
    const location = {
      latitude: 12.9715987,
      longitude: 77.5945627,
    };
    setDriverLocation(location);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Live Tracking</Text>
      {driverLocation && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: driverLocation.latitude,
            longitude: driverLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: driverLocation.latitude,
              longitude: driverLocation.longitude,
            }}
            title={driver.name}
            description="Driver's current location"
          />
        </MapView>
      )}
    </View>
  );
};

export default LiveTracking;
```