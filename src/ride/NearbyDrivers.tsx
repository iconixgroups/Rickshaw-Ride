```tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Driver } from '../models/Driver';
import { getNearbyDrivers } from '../services/DriverService';

const NearbyDrivers: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetchNearbyDrivers();
  }, []);

  const fetchNearbyDrivers = async () => {
    const nearbyDrivers = await getNearbyDrivers();
    setDrivers(nearbyDrivers);
  };

  const renderDriver = ({ item }: { item: Driver }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.distance} km away</Text>
    </View>
  );

  return (
    <View>
      <Text>Nearby Drivers</Text>
      <FlatList
        data={drivers}
        renderItem={renderDriver}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NearbyDrivers;
```