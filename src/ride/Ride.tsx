```tsx
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { RideContext } from '../contexts/RideContext';

const Ride = () => {
  const { ride, bookRide, cancelRide, completeRide } = useContext(RideContext);

  return (
    <View>
      <Text>Ride Details</Text>
      <Text>Pickup Location: {ride.pickupLocation}</Text>
      <Text>Destination: {ride.destination}</Text>
      <Text>Estimated Fare: {ride.estimatedFare}</Text>
      <Text>Driver: {ride.driver.name}</Text>

      {!ride.isBooked && (
        <Button title="Book Ride" onPress={bookRide} />
      )}

      {ride.isBooked && !ride.isCompleted && (
        <Button title="Cancel Ride" onPress={cancelRide} />
      )}

      {ride.isBooked && !ride.isCompleted && (
        <Button title="Complete Ride" onPress={completeRide} />
      )}
    </View>
  );
};

export default Ride;
```