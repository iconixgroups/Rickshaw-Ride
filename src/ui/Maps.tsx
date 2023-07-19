```tsx
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { RideContext } from '../ride/Ride';

const Maps: React.FC = () => {
  const { rideData } = React.useContext(RideContext);
  const [region, setRegion] = useState({
    latitude: 28.7041,
    longitude: 77.1025,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    if (rideData.pickupLocation) {
      setRegion({
        ...region,
        latitude: rideData.pickupLocation.latitude,
        longitude: rideData.pickupLocation.longitude,
      });
    }
  }, [rideData.pickupLocation]);

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={setRegion}
    >
      {rideData.pickupLocation && (
        <Marker
          coordinate={{
            latitude: rideData.pickupLocation.latitude,
            longitude: rideData.pickupLocation.longitude,
          }}
          title="Pickup Location"
        />
      )}
      {rideData.driverLocation && (
        <Marker
          coordinate={{
            latitude: rideData.driverLocation.latitude,
            longitude: rideData.driverLocation.longitude,
          }}
          title="Driver Location"
        />
      )}
    </MapView>
  );
};

export default Maps;
```