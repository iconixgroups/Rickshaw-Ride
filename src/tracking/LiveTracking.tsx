```tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface Driver {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

const LiveTracking: React.FC = () => {
  const [driver, setDriver] = useState<Driver | null>(null);

  useEffect(() => {
    // Fetch driver data from server
    // This is a placeholder, replace with actual fetch call
    const fetchDriverData = async () => {
      const response = await fetch('https://api.example.com/driver');
      const data = await response.json();
      setDriver(data);
    };

    fetchDriverData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 28.7041,
          longitude: 77.1025,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {driver && (
          <Marker
            coordinate={{
              latitude: driver.location.latitude,
              longitude: driver.location.longitude,
            }}
            title="Driver"
            description="Your driver's current location"
          />
        )}
      </MapView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Live Tracking</Text>
        {driver ? (
          <Text>Your driver is on the way!</Text>
        ) : (
          <Text>Fetching driver data...</Text>
        )}
      </View>
    </View>
  );
};

export default LiveTracking;
```