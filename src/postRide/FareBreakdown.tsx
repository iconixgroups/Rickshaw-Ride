```tsx
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RideContext } from '../ride/Ride';

const FareBreakdown: React.FC = () => {
  const { ride } = useContext(RideContext);

  return (
    <View>
      <Text>Fare Breakdown</Text>
      <Text>Base Fare: {ride.baseFare}</Text>
      <Text>Distance Fare: {ride.distanceFare}</Text>
      <Text>Time Fare: {ride.timeFare}</Text>
      <Text>Total Fare: {ride.totalFare}</Text>
    </View>
  );
};

export default FareBreakdown;
```