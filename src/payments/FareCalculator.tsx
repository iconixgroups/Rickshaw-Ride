```tsx
import React, { useContext } from 'react';
import { RideContext } from '../ride/Ride';
import { Text, View } from 'react-native';

const FareCalculator = () => {
  const { ride } = useContext(RideContext);

  const calculateFare = (distance: number, time: number) => {
    const baseFare = 50;
    const costPerKm = 10;
    const costPerMinute = 1;

    const distanceFare = distance * costPerKm;
    const timeFare = time * costPerMinute;

    return baseFare + distanceFare + timeFare;
  };

  return (
    <View id="fareCalculator">
      <Text>Fare: {calculateFare(ride.distance, ride.time)}</Text>
    </View>
  );
};

export default FareCalculator;
```