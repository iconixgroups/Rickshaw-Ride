```tsx
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RideContext } from '../contexts/RideContext';

const DriverTracking = () => {
  const { ride } = useContext(RideContext);
  const [driverLocation, setDriverLocation] = useState(null);

  useEffect(() => {
    // Assume we have a function to get driver's location from backend
    const fetchDriverLocation = async () => {
      try {
        const location = await getDriverLocation(ride.driverId);
        setDriverLocation(location);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDriverLocation();
  }, [ride]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: ride.pickupLocation.lat,
          longitude: ride.pickupLocation.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {driverLocation && (
          <Marker
            coordinate={{
              latitude: driverLocation.lat,
              longitude: driverLocation.lng,
            }}
            title={"Driver's Location"}
          />
        )}
      </MapView>
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Driver's ETA: {ride.driverETA}</Text>
      </View>
    </View>
  );
};

export default DriverTracking;
```