```tsx
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { RideContext } from '../App';

const CompleteRide = () => {
  const { ride, completeRide } = useContext(RideContext);

  return (
    <View id="completeRideForm">
      <Text>Ride ID: {ride.id}</Text>
      <Text>Driver: {ride.driver.name}</Text>
      <Text>Pickup Location: {ride.pickupLocation}</Text>
      <Text>Dropoff Location: {ride.dropoffLocation}</Text>
      <Text>Fare: {ride.fare}</Text>
      <Button title="Complete Ride" onPress={() => completeRide(ride.id)} />
    </View>
  );
};

export default CompleteRide;
```