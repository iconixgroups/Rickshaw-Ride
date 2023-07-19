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

const DriverTracking: React.FC = () => {
  const [driver, setDriver] = useState<Driver | null>(null);

  useEffect(() => {
    // Fetch driver data from API or Firebase
    // This is just a placeholder, replace with actual data fetching
    const fetchDriver = async () => {
      const response = await fetch('https://api.example.com/driver');
      const data = await response.json();
      setDriver(data);
    };

    fetchDriver();
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
          />
        )}
      </MapView>
      <View style={{ position: 'absolute', bottom: 0, padding: 10 }}>
        <Text>Driver ID: {driver?.id}</Text>
        <Text>
          Location: {driver?.location.latitude}, {driver?.location.longitude}
        </Text>
      </View>
    </View>
  );
};

export default DriverTracking;
```