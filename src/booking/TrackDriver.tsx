import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RideContext } from '../context/RideContext';

const TrackDriver: React.FC = () => {
  const { ride } = useContext(RideContext);
  const [driverLocation, setDriverLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    // Here you would typically connect to your backend API to get the driver's real-time location
    // For the sake of this example, we'll just simulate a driver moving towards the pickup location
    const interval = setInterval(() => {
      setDriverLocation(prevLocation => ({
        latitude: prevLocation.latitude + (ride.pickupLocation.latitude - prevLocation.latitude) / 10,
        longitude: prevLocation.longitude + (ride.pickupLocation.longitude - prevLocation.longitude) / 10,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [ride.pickupLocation]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: ride.pickupLocation.latitude,
          longitude: ride.pickupLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={ride.pickupLocation} title="Pickup Location" />
        <Marker coordinate={driverLocation} title="Driver" />
      </MapView>
      <View style={{ padding: 16 }}>
        <Text>Driver is on the way!</Text>
      </View>
    </View>
  );
};

export default TrackDriver;