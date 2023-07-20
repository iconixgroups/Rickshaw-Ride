```tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RideType = () => {
  const [rideType, setRideType] = useState<string>('');

  const handleRideTypeSelection = (type: string) => {
    setRideType(type);
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
      {rideType && <Text>You selected: {rideType}</Text>}
    </View>
  );
};

export default RideType;
```