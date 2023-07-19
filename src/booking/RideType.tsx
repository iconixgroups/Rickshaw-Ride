```tsx
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RideContext } from '../contexts/RideContext';

const RideType = () => {
  const { selectRideType } = useContext(RideContext);
  const [selectedRideType, setSelectedRideType] = useState<string | null>(null);

  const handleRideTypeSelection = (rideType: string) => {
    setSelectedRideType(rideType);
    selectRideType(rideType);
  };

  return (
    <View>
      <Text>Select Ride Type</Text>
      <TouchableOpacity onPress={() => handleRideTypeSelection('Standard')}>
        <Text>Standard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRideTypeSelection('Premium')}>
        <Text>Premium</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRideTypeSelection('Luxury')}>
        <Text>Luxury</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RideType;
```