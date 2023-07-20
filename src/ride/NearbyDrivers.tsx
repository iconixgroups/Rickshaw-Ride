```tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DriverSchema } from '../shared/DriverSchema';

interface NearbyDriversProps {
  location: {
    latitude: number;
    longitude: number;
  };
}

const NearbyDrivers: React.FC<NearbyDriversProps> = ({ location }) => {
  const [nearbyDrivers, setNearbyDrivers] = useState<DriverSchema[]>([]);

  useEffect(() => {
    fetchNearbyDrivers();
  }, [location]);

  const fetchNearbyDrivers = async () => {
    // Fetch nearby drivers based on location
    // This is a placeholder, replace with actual API call
    const response = await fetch('https://api.example.com/nearby-drivers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    });

    const data = await response.json();
    setNearbyDrivers(data.drivers);
  };

  return (
    <View>
      <Text>Nearby Drivers</Text>
      <FlatList
        data={nearbyDrivers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.distance} km away</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NearbyDrivers;
```